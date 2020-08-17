import React from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { store } from './../../store/index';
import { checkAuth, RefreshUser } from './../../actions/site/user/index';
export const Auth = () => {
    let token = localStorage.getItem('token');
    if (token) {
        let decode = jwt.decode(token);
        console.log(decode);
        let expire_time = decode.exp;
        let start_time = Math.floor(new Date().getTime() / 1000);
        console.log(start_time);
        console.log(expire_time);
        if (expire_time >= start_time) {
            let a=decode.jti;
            store.dispatch(checkAuth(a));
        } else {
            localStorage.removeItem("token");
            store.dispatch(RefreshUser());
        }

    }
}