import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HandleShowVideo, handleVideoCreate, handleDeleteVideo } from './../../../actions/site/video/index';
import { withRouter } from 'react-router';
import { handleCreate } from '../../../actions/personManager';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
const VideoUpload = (props) => {
    const [gettitle,settitle]=useState({title:""});
    const [getvideo,setvideo]=useState({video:""});
    const [getshow,setshow]=useState({show:false});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(HandleShowVideo(props.match.params.id))
    },[])
    const videos = useSelector(state => state.video);
    const course = useSelector(state => state.course);
    let i=1;
    return (
        <diV>
            {getshow.show?(<form style={{fontSize:"15px"}} onSubmit={(event)=>{dispatch(handleVideoCreate(course.id,course.slug,event,gettitle.title,getvideo.video))}}>
                <div className="form-group">
                    <label for="title">عنوان</label>
                    <input style={{fontSize:"15px"}} type="text" className="form-control" id="title" placeholder="عنوان را وارد کنید" onChange={(event)=>{settitle({title:event.target.value})}}/>
                </div>
                <div className="form-group">
                    <label for="videoUrl">ویدیو</label>
                    <input style={{fontSize:"15px"}} type="file" className="form-control" id="videoUrl" placeholder="ویدیوی مورد نظر را وارد کنید" onChange={(event)=>{setvideo({video:event.target.files[0]})}}/>
                </div>
                <button style={{fontSize:"15px"}} type="submit" className="btn btn-primary">ارسال</button>
            </form>):null}
            <button className="btn btn-success btn-lg btn-block my-4" style={{ fontSize: "18px" }} onClick={()=>{setshow({show:!getshow.show})}}>{getshow.show?"بستن":"اضافه کردن ویدیو"}</button>
            <table style={{fontSize:"15px"}} className="table table-hover table-active table-bordered my-2">
                <thead>
                    <th>ردیف</th>
                    <th>عنوان</th>
                    <th>ویدیو</th>
                    <th>نام دوره</th>
                    <th>حذف ویدیو</th>
                    <th>ویرایش ویدیو</th>
                </thead>
                <tbody>
                    
                    {videos.map((video) => (
                        <tr key={video.id}>
                            <td>{i++}</td>
                            <td  >{video.title}</td>
                            <td ><a style={{fontSize:"15px"}} href={`http://127.0.0.1:8000/storage/video/${video.videoUrl}`} className="btn btn-success">نمایش ویدیو</a></td>
                            <td >{course.name}</td>
                            <td ><button style={{fontSize:"15px"}} className="btn btn-success" onClick={()=>dispatch(handleDeleteVideo(video.id))}>حذف</button></td>
                            <td ><button style={{fontSize:"15px"}} className="btn btn-success" onClick={()=>dispatch()} >ویرایش </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </diV>
    );
}
export default withRouter(VideoUpload);