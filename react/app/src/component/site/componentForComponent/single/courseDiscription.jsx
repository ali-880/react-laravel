import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HandleShowVideo } from '../../../../actions/site/video';
import { withRouter } from 'react-router';
import { FcDownload, FcFilmReel } from "react-icons/fc";

const CourseDescription = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(HandleShowVideo(props.match.params.id))
    }, [])
    const [getVideo,setVideo]=useState({video:""});
    const course = useSelector(state => state.course);
    const videos = useSelector(state => state.video);
    return (
        <div>
            <section className="term-description">
                <img src={`http://127.0.0.1:8000/storage/images/${course.imageUrl}`} />
                <h2> {course.name} </h2>
                <p>
                    {course.title}
                </p>
                {getVideo.video?(<video width="320" height="240" controls poster={`http://127.0.0.1:8000/storage/images/${course.imageUrl}`}>
                    <source src={getVideo.video} type="video/mp4"/>
                </video>):null}
                        <h2> سرفصل های این دوره : </h2>
                        <ul>
                            {videos.map(video => (
                                <li key={video.id}>
                                    <div className="row">
                                        <div className="col-10">
                                            <h3 style={{ marginLeft: "50%" }}>
                                                {video.title}
                                            </h3>
                                        </div>
                                        <a href={`http://127.0.0.1:8000/storage/video/${video.videoUrl}`} style={{ marginLeft: "10px", fontSize: "20px", borderRadius: "50%", background: "#48dbfb" }} className="btn"><FcDownload /></a>
                                        <button style={{ fontSize: "20px", borderRadius: "50%", background: "#48dbfb" }} className="btn" onClick={()=>{setVideo({video:`http://127.0.0.1:8000/storage/video/${video.videoUrl}`})}}><FcFilmReel /></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
            </section>
        </div>
    );
}
export default withRouter(CourseDescription);