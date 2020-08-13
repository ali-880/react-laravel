import React from 'react';
const Info = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-info">
                        <div className="inner">
                            <h3>150</h3>

                            <p>تعداد کل دورره ها</p>
                        </div>
                        <div className="icon">
                            <i style={{marginRight:"0%"}} className="ion ion-bag"></i>
                        </div>
                        <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-success">
                        <div className="inner">
                            <h3>53<sup style={{ fontSize: "20px" }}>%</sup></h3>

                            <p>دوره های یک ماه اخییر</p>
                        </div>
                        <div className="icon">
                            <i style={{marginRight:"0%"}} className="ion ion-stats-bars"></i>
                        </div>
                        <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-warning">
                        <div className="inner">
                            <h3>44</h3>

                            <p>کاربران حاظر در سیستم</p>
                        </div>
                        <div className="icon">
                            <i style={{marginRight:"0%"}} className="ion ion-person-add"></i>
                        </div>
                        <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>65</h3>

                            <p>محبوب ترین دوره ها</p>
                        </div>
                        <div className="icon">
                            <i  className="ion ion-pie-graph"></i>
                        </div>
                        <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;