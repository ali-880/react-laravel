import React, { useState, useRef } from 'react';
import ClientCaptcha from "react-client-captcha";
import { FcMinus} from "react-icons/fc";
import { FaLockOpen,FaVoicemail,FaRocketchat  } from "react-icons/fa";
import { RegisterApi } from '../../../actions/site/user';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import { withRouter } from 'react-router';
const Register = (props) => {
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
    const [captcha,setcaptcha]=useState({captcha:""});
    const [password_confirm,setpassword_confirm]=useState({password_confirm:""});
    const [concaptcha,setconcaptcha]=useState({concaptcha:""});
    const [name,setname]=useState({name:""});
    const messageCaptcha=useSelector(state=>state.messageCaptcha);
    const messageConfirmed=useSelector(state=>state.messageconfirmed);
    const [password,setpassword]=useState({password:""})
    const [email,setemail]=useState({email:""});
    const dispatch=useDispatch();
    return (
        <div>
            <main className="client-page">
                <div className="container-content">
                    <header><h2> عضویت در سایت </h2></header>
                    <div className="form-layer">
                        <form onSubmit={(event)=>dispatch(RegisterApi(props.history.replace,validator.current,event,email.email,password.password,name.name,captcha.captcha,concaptcha.concaptcha,password_confirm.password_confirm))}>
                            <div className="input-group">
                                <span className="input-group-addon" id="username"><i><FaRocketchat/></i></span>
                                <input onChange={(event)=>{setname({name:event.target.value})}} name="username" type="text" style={{fontSize:"13px"}} className="form-control" placeholder="نام و نام خانوادگی" aria-describedby="username" />
                            </div>
                            {validator.current.message('username', name.name, 'required|string|min:4', { className: 'text-danger' })}
                            <div className="input-group">
                                <span className="input-group-addon" id="email-address"><i style={{fontSize:"13px"}}><FaVoicemail/></i></span>
                                <input name="email" onChange={(event)=>{setemail({email:event.target.value})}} style={{fontSize:"13px"}} type="text" className="form-control" placeholder="ایمیل" aria-describedby="email-address" />
                            </div>
                            {validator.current.message('email', email.email, 'required|email', { className: 'text-danger' })}
                            <div className="input-group">
                                <span className="input-group-addon" id="password"><i style={{fontSize:"13px"}}><FaLockOpen/></i></span>
                                <input name="password" style={{fontSize:"13px"}} type="text" className="form-control" onChange={(event)=>{setpassword({password:event.target.value})}} placeholder="رمز عبور " aria-describedby="password" />
                            </div>
                            {validator.current.message('password', password.password, 'required|min:6|strnig', { className: 'text-danger' })}
                            <div className="input-group">
                                <span className="input-group-addon" id="password_confirm"><i style={{fontSize:"13px"}}><FaLockOpen/></i></span>
                                <input style={{fontSize:"13px"}} type="text" className="form-control" onChange={(event)=>{setpassword_confirm({password_confirm:event.target.value})}} placeholder="تایید رمز " aria-describedby="password" />
                            </div>
                            <p className="text text-danger  my-2" style={{fontSize:"12px"}}>{messageConfirmed}</p>
                            <ClientCaptcha captchaCode={code =>{ 
                                setconcaptcha({concaptcha:code})
                                }} backgroundColor={"#27ae60"} retryButtonClassName={"mx-3 btn"}/>
                            <div className="input-group">
                                <span className="input-group-addon" id="password"><i style={{fontSize:"13px"}}><FcMinus/></i></span>
                                <input onChange={(event)=>{setcaptcha({captcha:event.target.value})}} style={{fontSize:"13px"}} type="text" className="form-control" placeholder="کد بالا را وارد کنید " aria-describedby="password" />
                            </div>
                            <p className="text text-danger my-2" style={{fontSize:"12px"}}>{messageCaptcha}</p>
                            <div className="accept-rules">
                                <label><input style={{fontSize:"13px"}} type="checkbox" name="" />  قوانین و مقررات سایت را میپذیرم </label>
                            </div>
                            <div className="link">
                                <a href=""> <i style={{fontSize:"13px"}} className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                                <a href=""> <i style={{fontSize:"13px"}} className="zmdi zmdi-account"></i> ورود به سایت </a>
                            </div>
                            <button style={{fontSize:"13px"}} className="btn btn-success"> عضویت در سایت </button>
                        </form>
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}
export default withRouter( Register);