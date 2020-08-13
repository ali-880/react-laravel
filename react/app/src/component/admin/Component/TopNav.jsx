import React from 'react';
import { Link } from 'react-router-dom';
const TopNav = () => {
    return (
        <div style={{fontSize:"15px"}}>
            <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom" >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/admin" className="nav-link">خانه</Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="" className="nav-link">تماس</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i style={{fontSize:"17px"}} className="fa fa-comments-o m3" ></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i style={{fontSize:"17px"}} className="fa fa-bell-o"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TopNav;