import React from 'react';
import { Link } from 'react-router-dom';
const Dashbord = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <p style={{ fontSize: "17px", marginRight: "30%", marginTop: "5%", color: "white" }}>پنل مدیریت</p>
                <hr style={{color:"white"}}/>
                <div className="sidebar" style={{ direction: "ltr", fontSize: "15px" }}>
                    <div style={{ direction: "rtl" }}>
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="images/sess_0_48068_0_0.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">سید علیرضا حسینی</a>
                            </div>
                        </div>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item has-treeview">
                                    
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fa fa-book"></i>
                                        <p>
                                            صفحات
                                             <i className="fa fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/examples/invoice.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>سفارشات</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/profile.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>پروفایل</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/login.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>صفحه ورود</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/register.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>صفحه عضویت</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/lockscreen.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>قفل صفحه</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fa fa-plus-square-o"></i>
                                        <p style={{ marginLeft: "120px" }}>
                                            صفحات ارور
                                           <i className="fa fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/examples/404.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>ارور 404</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/500.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>ارور 500</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/blank.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>صفحه خالی</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="starter.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>صفحه شروع</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fa fa-caret-square-o-left"></i>
                                        <p style={{ marginLeft: "150px" }}>
                                            دوره ها
                                           <i className="fa fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/examples/404.html" className="nav-link">
                                                <i className="fa fa-circle-o nav-icon"></i>
                                                <p>نمایش دوره ی جدید</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Dashbord;