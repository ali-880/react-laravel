import React, { useRef, useState,useEffect } from 'react';
import { Fragment } from 'react';
import { FaVoicemail, FaLockOpen } from 'react-icons/fa';
import SimpleReactValidator from 'simple-react-validator';
import { useSelector, useDispatch } from 'react-redux';
import { handleLogin } from '../../../actions/site/user';
import { ToastContainer } from 'react-toastify';
import { withRouter, Redirect } from 'react-router';
import ClientCaptcha from "react-client-captcha";
import { FcMinus } from 'react-icons/fc';
import { Auth } from './../../../util/auth/Auth';
const Login = (props) => {
    const course=useSelector(state=>state.courses);

    useEffect(()=>{
        Auth();
console.log(course);
    },[]);
   
    const [password,setpassword]=useState({password:""})
    const [email,setemail]=useState({email:""});
    const [password_confirm,setpassword_confirm]=useState({password_confirm:""});
    const messageConfirmed=useSelector(state=>state.messageconfirmed);
    const messageCaptcha=useSelector(state=>state.messageCaptcha);
    const [concaptcha,setconcaptcha]=useState({concaptcha:""});
    const validator=useRef(new SimpleReactValidator(
        {
            messages:{
                required:"این فیلد الزامی است",
                string:"این فیلد عدد قبول نمی کند",
                min:"تعداد کاراکتر ها ی وررودی باید بیش تر باشد",
                email:"این فیلد باید با فرمت ایمیل پرشود"
            },
            element:ma=>(<div style={{fontSize:"12px",color:"red"}}>{ma}</div>)
        }
    ));
    const [valid,setvalid]=useState({valid:false})
    const dispatch=useDispatch();
    const [captcha,setcaptcha]=useState({captcha:""});
    return (
        <Fragment>
            <main className="client-page">
                <div className="container-content">
                    <header><h2> ورود به سایت </h2></header>
                    <div className="form-layer">
                        <form onSubmit={(event)=>dispatch(handleLogin(validator.current,props.history.replace,event,email.email,password.password,password_confirm.password_confirm,captcha.captcha,concaptcha.concaptcha))}>
                            <div className="input-group">
                                <span className="input-group-addon" id="email-address"><i style={{ fontSize: "13px" }}><FaVoicemail /></i></span>
                                <input name="email" onChange={(event) => { 
                                    setemail({ email: event.target.value }) 
                                    validator.current.showMessageFor('email');
                                    setvalid({valid:!valid})    
                            }} style={{ fontSize: "13px" }} type="text" className="form-control" placeholder="ایمیل" aria-describedby="email-address" />
                            </div>
                            {validator.current.message('email', email.email, 'required|email', { className: 'text-danger' })}
                            <div className="input-group">   
                                <span className="input-group-addon" id="password"><i style={{ fontSize: "13px" }}><FaLockOpen /></i></span>
                                <input name="password" style={{ fontSize: "13px" }} type="text" className="form-control" onChange={(event) => { 
                                    setpassword({ password: event.target.value })
                                    validator.current.showMessageFor('password');
                                    setvalid({valid:!valid}) 
                                }} placeholder="رمز عبور " aria-describedby="password" />
                            </div>
                            {validator.current.message('password', password.password, 'required|min:6|strnig', { className: 'text-danger' })}
                            <div className="input-group">
                                <span className="input-group-addon" id="password_confirm"><i style={{ fontSize: "13px" }}><FaLockOpen /></i></span>
                                <input style={{ fontSize: "13px" }} type="text" className="form-control" onChange={(event) => { setpassword_confirm({ password_confirm: event.target.value }) }} placeholder="تایید رمز " aria-describedby="password" />
                            </div>
                            <p className="text text-danger  my-2" style={{ fontSize: "12px" }}>{messageConfirmed}</p>
                            <ClientCaptcha captchaCode={code =>{ 
                                setconcaptcha({concaptcha:code})
                                }} backgroundColor={"#27ae60"} retryButtonClassName={"mx-3 btn"}/>
                            <div className="input-group">
                                <span className="input-group-addon" id="password"><i style={{fontSize:"13px"}}><FcMinus/></i></span>
                                <input onChange={(event)=>{setcaptcha({captcha:event.target.value})}} style={{fontSize:"13px"}} type="text" className="form-control" placeholder="کد بالا را وارد کنید " aria-describedby="password" />
                            </div>
                            <p className="text text-danger my-2" style={{fontSize:"12px"}}>{messageCaptcha}</p>
                            <div className="remember-me">
                                <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                            </div>
                            <div className="link">
                                <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                                <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                            </div>
                            <button className="btn btn-success"> ورود به سایت </button>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </main>
        </Fragment>
    );
}
export default withRouter(Login);