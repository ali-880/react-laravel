import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HandleShowVideo } from '../../../actions/site/video';
import CourseDescription from './../componentForComponent/single/courseDiscription';
import Comment from './../componentForComponent/Comment';
import InfoCourse from './../componentForComponent/single/InfoCourse';
import { withRouter } from 'react-router';
const Single = (props) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(HandleShowVideo(props.match.params.id))
    },[]);
    return (
        <div>           
            <div className="container">
                <section className="term-content">
                    <header><h1> دوره آموزشی ساخت ربات تلگرام </h1></header>
                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-xs-12 pull-left">
                           <CourseDescription/>
                            <Comment/>
                        </div>
                       <InfoCourse/>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default withRouter(Single)