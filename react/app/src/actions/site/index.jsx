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
        let a = [...getstate().courses];
        let fd = new FormData();
        validator.current.showMessages();
        fd.append('imageUrl', image);
        fd.append("name",name);
        fd.append("price", price);
        fd.append("description", description);
        fd.append("title", title);
        fd.append("teacher", teacher);
        await axios.post("http://127.0.0.1:8000/api/courses", fd, {
            headers: {
                'content-type': 'application/json',
            }
        }).then((r)=>{
            const b = r.data.data;
            toast.success(r.data.message, {
                position: "bottom-right"
            })
            a = b;
         }).catch((v)=>{
            validator.current.showMessages();
            console.log(v);
        })
        await dispatch(IsopenModal());
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
        await dispatch({ type: "DELETE_COURSE", payload: [...getstate().courses, a.data.data] });
        await dispatch(handleShowPersons())
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
        await dispatch({type:"UPDATE_COURSE",payload:a.data.data});

    }
}
export const IsopenModalForChange = () => {
    return async (dispatch, getstate) => {
        console.log(getstate().isopenchange);
        await dispatch({ type: "IsopenChange", payload: !getstate().isopenchange })
    }
}
