import React from 'react';
import { useSelector } from 'react-redux';
import lodash from 'lodash';
import { Link, NavLink } from 'react-router-dom';
const NavTop = () => {
    const user = useSelector(state => state.user)
    return (
        <div>
            <nav>
                <div className="row">
                    <div className="col-sm-6 col-xs-12">
                        <ul>
                            <li>
                                <a href=""> همکاری در فروش </a>
                                <a href=""> درباره ما </a>
                                <a href=""> تماس با ما </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-xs-12" style={{fontSize:"12px"}}>
                        <div className="clientarea">
                            {console.log(lodash(user).isEmpty())}
                            {!lodash(user).isEmpty() ? (
                                <div className="loggein ">
                                    <i className="zmdi zmdi-account"></i><a href=""> {user.name}</a>/
                                    <Link to='/logout'> خروج</Link>
                                </div>
                            ) : (
                                    <div className="signin">
                                        <i className="zmdi zmdi-account"></i>
                                        <NavLink to="/login" activeClassName="btn btn-success" activeStyle={{fontSize:"14px"}}> ورود </NavLink> /
                                        <NavLink to="/register" activeClassName="btn btn-success" activeStyle={{fontSize:"14px"}}> عضویت </NavLink>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavTop;