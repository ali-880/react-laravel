import axios from "axios"
import { toast } from "react-toastify";
import { handleShowPersons } from './../personManager/index';
export const getAllCourse = () => {
    return async (dispatch, getstate) => {
        const a = await axios.get('http://127.0.0.1:8000/api/courses', {
            headers: {
                "Content-Type": "application/json"
            }
        });
        await dispatch({ type: "ALL_COURSE", payload: [...a.data] })
    }
}
export const handeleCreateCourse = (validator,event, teacher, title, description, price, image,name) => {
    return async (dispatch, getstate) => {
        event.preventDefault();
        if(validator.current.allValid()){
            let a = [...getstate().courses];
            let fd = new FormData();
            validator.current.showMessages();
            fd.append('imageUrl', image);
            fd.append("name",name);
            fd.append("price", price);
            fd.append("description", description);
            fd.append("title", title);
            fd.append("teacher", teacher);
            try{
                let r=await axios.post("http://127.0.0.1:8000/api/courses", fd, {
                    headers: {
                        'content-type': 'application/json',
                    }
                })
                toast.success(r.data.message, {
                    position: "bottom-right"
                })
                let x=r.data.data;
                await dispatch({type:"SetValueCourses",payload:[...x]})
                await dispatch(IsopenModal()); 
            }catch(e){
                if (e.response.status == 422) {
                    toast.warning("در وارد کردن مقادیر دقت بیشتری کنید",{position:"bottom-right"});
                    await dispatch(IsopenModal()); 
                }else if(e.response.status == 500){
                    toast.error("با عرض پوزش مشکلی پیش امده است",{position:"bottom-right"});
                    await dispatch(IsopenModal()); 
                }
            }
        }
        else{
            validator.current.showMessages();
        } 
    }
}
export const IsopenModal = () => {
    return async (dispatch, getstate) => {
        await dispatch({ type: "ISOPEN", payload: !getstate().isopen })
    }
}
export const handleDeleteCourse = (id) => {
    return async (dispatch, getstate) => {
        let a = await axios.delete(`http://127.0.0.1:8000/api/courses/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        toast.success(a.data.message, {
            position: "bottom-right",
        });
        let courses=[...getstate().courses];
        let y=courses.filter(e=>e.id!==id);
        await dispatch({ type: "SetValueCourses", payload:[...y] });
    }
}
export const handleUpdateCourse = (event, id, teacher, title, description, price, image,name) => {
    return async (dispatch, getstate) => {
        event.preventDefault();
        const fd = new FormData();
        fd.append("imageUrl",image);
        fd.append("name",name);
        fd.append('price',price);
        fd.append('title',title);
        fd.append('teacher',teacher);
        fd.append('description',description);
        let a=await axios.post(`http://127.0.0.1:8000/api/courses/update/${id}`, fd, {
            headers:
                { "Content-Type": "application/json" }
        })
        await dispatch(IsopenModalForChange())
        toast.success(a.data.message,{position:"bottom-right"});
        await dispatch({type:"UPDATE_COURSE",payload:{...a.data.data}});

    }
}
export const IsopenModalForChange = () => {
    return async (dispatch, getstate) => {
        console.log(getstate().isopenchange);
        await dispatch({ type: "IsopenChange", payload: !getstate().isopenchange })
    }
}
