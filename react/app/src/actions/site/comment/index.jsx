import axios from "axios"
import { toast } from "react-toastify";
export const handleGetAllCommentCourse=(id)=>{
    return async(dispatch,getstate)=>{
        let a=await axios.get(`http://127.0.0.1:8000/api/comments/${id}`,{headers:{"Content-Type":"application/json"}});
        await dispatch({type:"GetAllCommentCourse",payload:[...a.data.comments]});
    }
}

export const handleAllComment=()=>{
    return async (dispatch,getstate)=>{
        let a=await axios.get("http://127.0.0.1:8000/api/comments/show",{headers:{"Content-Type":"application/json"}});
        await dispatch({type:"GetAllComments",payload:[...a.data.comments]});
    }
}
export const handleAllCommentPublish=()=>{
    return async (dispatch,getstate)=>{
        let a=await axios.get("http://127.0.0.1:8000/api/comments/show/publish",{headers:{"Content-Type":"application/json"}});
        await dispatch({type:"GetAllComments",payload:[...a.data.comments]});
    }
}


export const handlePublishComment=(id)=>{
    return async(dispatch,getstate)=>{
        let a=await axios.get(`http://127.0.0.1:8000/api/comments/update/${id}`,{headers:{"Content-Type":"application/json"}});
        let b=[...getstate().comments];
        let c=b.findIndex(x=>x.id==id);
        b[c].approval=1;
        await dispatch({type:"setValueComment",payload:[...b]})
        toast.success(a.data.message,{position:"bottom-right"});
    }
}
export const handlePublishCommentPublish=(id)=>{
    return async(dispatch,getstate)=>{
        let a=await axios.get(`http://127.0.0.1:8000/api/comments/update/publish/${id}`,{headers:{"Content-Type":"application/json"}});
        toast.success(a.data.message,{position:"bottom-right"});
    }
}

export const handleDeleteComment=(id)=>{
    return async (dispatch,getstate)=>{
        let a=await axios.delete(`http://127.0.0.1:8000/api/comments/${id}`,{headers:{"Content-Type":"application/json"}});
        let b=[...getstate().comments];
        let c=b.filter(a=>a.id!==id);
        await dispatch({type:"setValueComment",payload:[...c]})
        toast.success(a.data.message,{position:"bottom-right"});
    }
}