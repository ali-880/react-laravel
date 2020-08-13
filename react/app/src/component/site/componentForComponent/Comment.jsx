import React from 'react';
const Comment = () => {
    return (
        <div>
            <section className="user-comments">
                <header><h3> نظرات کاربران </h3></header>
                <div className="inner">
                    <form>
                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="نام و نام خانوادگی" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="ایمیل" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="شماره تماس" />
                                </div>
                            </div>
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
                    </form>

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

export default Comment;