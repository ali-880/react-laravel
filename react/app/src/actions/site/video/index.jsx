import axios from "axios";
import { toast } from "react-toastify";
export const HandleShowVideo=(slug)=>{
    return async(dispatch,getstate)=>{

        let b=await axios.get(`http://127.0.0.1:8000/api/courses/${slug}`,{headers:{
            "Content-Type":"application/json"
        }})
        let a=b.data.video;
        let c=b.data.course;
        await dispatch(handleSingleVideo(c));
        await dispatch({type:"HandleShowVideo",payload:[...a]});
        console.log("dasdasdsdasdasdsada");
        
    }
}
export const handleSingleVideo=(item)=>{
    return async (dispatch,getstate)=>{
        
        await dispatch({type:"handleSingleVideoFor",payload:item});
        }
}
export const handleVideoCreate=(id,slug,event,title,video)=>{
    return async (dispatch,getstate)=>{
        event.preventDefault();
        let c=[...getstate().video];
        let a=new FormData();
        console.log(title);
        a.append("title",title);
        a.append("videoUrl",video);
        a.append("course_id",id);
        let b=await axios.post(`http://127.0.0.1:8000/api/videos/${slug}`,a,{headers:{"Content-Type":"application/json"}});
        console.log(b);
        toast.success(b.data.message,{
            position:"bottom-right"
        });
        await dispatch({type:"handleVideoCreate",payload:[...getstate().video,c]})
    }
}
export const handleDeleteVideo=(id)=>{
    return async (dispatch,getstate)=>{
        let c=axios.delete(`http://127.0.0.1:8000/api/videos/${id}`,{headers:{"Content-Type":"application/json"}});
        await dispatch({type:"handleDeleteVideo",payload:c})      
    }
}