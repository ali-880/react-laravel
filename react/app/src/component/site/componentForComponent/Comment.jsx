import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import lodash from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { handleGetAllCommentCourse } from '../../../actions/site/comment';
const Comment = (props) => {
    const dispatch = useDispatch();
    const course = useSelector(state => state.course);
    const comment = useSelector(state => state.comment);
    const user = useSelector(state => state.user);
    useEffect(() => {
        dispatch(handleGetAllCommentCourse(props.match.params.id))
    }, [])
    return (
        <div>
            <section className="user-comments">
                <header><h3> نظرات کاربران </h3></header>
                <div className="inner">
                    {!lodash(user).isEmpty() ? (<form>
                        <div className="row">
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="متن نظر"></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 col-sm-7 col-xs-7">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="کد امنیتی" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-5 col-xs-5">
                                        <img src="images/captcha.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <button type="submit" className="btn btn-success"> ثبت دیدگاه </button>
                            </div>
                        </div>
                    </form>) : (
                            <div className="row">
                                <div className="alert alert-success" style={{ width: "100%", height: "100%" }}>
                                    <p className="my-2 text-bold" style={{ fontSize: "16px", color: "black" }}>برای قرارر دادن کامنت ابتدا باید به سایت وارد شوید</p><br />
                                    <Link to="/login" className="btn btn-warning mt-3 " style={{ width: "20%", height: "20%", fontSize: "13px", color: "black" }}>ورود به سایت</Link>
                                </div>
                            </div>
                        )}
                    {comment.map(com => (
                        <div className="comment-row" key={com.id}>
                            <img src="/images/download.jpg" style={{width:"50px",height:"50px "}}/>
                            <div className="left-col">
                                <h3> {com.user.name}</h3>
                                <span>12/03/1397</span>
                                <p>
                                    {com.content}
                                </p>
                            </div><hr/>
                        </div>
                    ))}
                    <div className="comment-list">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true"><i className="zmdi zmdi-chevron-right"></i></span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true"><i className="zmdi zmdi-chevron-left"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default withRouter(Comment);