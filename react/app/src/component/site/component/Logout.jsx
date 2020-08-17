import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { LOGOUT } from './../../../actions/site/user/index';
import { Redirect, withRouter } from 'react-router';
const Logout = (props) => {
    console.log("dsadadas");
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user);
        dispatch(LOGOUT(user.id));
        localStorage.removeItem("token");
        props.history.replace('/')
    return ( 
        <Redirect to="/"/>
     );
}
export default withRouter(Logout);