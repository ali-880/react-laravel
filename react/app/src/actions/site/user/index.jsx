import axios from "axios";
import { toast } from "react-toastify";
export const RegisterApi = (replace, val, event, email, password, name, captcha, confirmcaptcha, conpass) => {
    return async (dispatch, getstate) => {
        event.preventDefault();
        await dispatch({ type: "REGISTER_CAPTCHA_remove", payload: "" });
        await dispatch({ type: "REGISTER_CONFIRMED_remove", payload: "" });
        if (val.allValid()) {
            if (captcha != confirmcaptcha) {
                await dispatch({ type: "REGISTER_CAPTCHA", payload: "لضفا در وارد کردن کد بالا دقت کنید" });
            } else if (password != conpass) {

                await dispatch({ type: "REGISTER_CONFIRMED", payload: "رمز وارد شده با رمز مطابقت ندارد" });

            } else {
                let person = {
                    name,
                    password,
                    email,
                }
                try {
                    let c = await axios.post("http://127.0.0.1:8000/api/register", JSON.stringify(person), { headers: { "Content-Type": "application/json" } });
                    replace("/login");
                }
                catch (e) {
                    console.log(e.response);
                    if (e.response.status == 422) {
                        for(let i=0;i<e.response.data.errors.length;i++){
                            toast.error(e.response.data.errors[i], { position: "bottom-right" });
                        }
                    } else {
                        toast.error("خطایی از سمت سرور اتفاق افتاده است با عرض پوزش لطفا چند دقیقه صبر کنید", { position: "bottom-right" });
                    }
                }
            }
        } else {
            val.showMessages();
        };

    }
}
export const handleLogin = (val,ad, event, email, password, confirme, captcha, confirmCaptch) => {
    return async (dispatch, getstate) => {
        event.preventDefault();
        await dispatch({ type: "REGISTER_CAPTCHA_remove", payload: "" });
        await dispatch({ type: "REGISTER_CONFIRMED_remove", payload: "" });
        if (val.allValid()) {
            if (password != confirme) {
                await dispatch({ type: "REGISTER_CONFIRMED", payload: "رمز وارد شده با رمز مطابقت ندارد" });
            } else if (captcha != confirmCaptch) {
                await dispatch({ type: "REGISTER_CAPTCHA", payload: "لضفا در وارد کردن کد بالا دقت کنید" });
            }
            else {
                let person = {
                    email,
                    password,
                    confirme,
                }
                try {
                    let a = await axios.post("http://127.0.0.1:8000/api/login", JSON.stringify(person), { headers: { "Content-Type": "application/json" } })
                    await dispatch({ type: "Login", payload: a.data.data });
                    localStorage.setItem("token", a.data.token);
                    toast.success(a.data.message, { position: "bottom-right" });
                    ad("/");
                }
                catch (e) {
                    console.log(e);
                    if (e.response.status == 402) {
                        toast.error(e.response.data, { position: "bottom-right" });
                    } else if (e.response.status == 401) {
                        toast.error(e.response.data, { position: "bottom-right" });
                    }
                    else  if (e.response.status == 422) {
                        for(let i=0;i<e.response.data.errors.length;i++){
                            toast.error(e.response.data.errors[i], { position: "bottom-right" });
                        }
                    } else {
                        toast.error("مشکلی از سمت سروس اتفاق افتاده است لطفا دو باره تلاش کنید", { position: "bottom-right" });
                    }
                }
            }
        }else{
            val.showMessages();
        }
    }
}
export const checkAuth=(id)=>{
    return async (dispatch,getstate)=>{
        let e={
            token_id:id,
        }
        let a=await axios.post("http://127.0.0.1:8000/api/userInfo",JSON.stringify(e),{ headers: { "Content-Type": "application/json" } });
        console.log(a.data);
        await dispatch({type:"checkAuth",payload:a.data})
    }
}
export const RefreshUser=()=>{
    return async(dispatch,getstate)=>{
        await dispatch({type:"REFRESHUSER",payload:{}});
    }
}
export const LOGOUT=(id)=>{
    return async(dispatch,getstate)=>{
        let a={
            id,
        }
        await axios.post("http://127.0.0.1:8000/api/logout",JSON.stringify(a),{ headers: { "Content-Type": "application/json" } });
        localStorage.removeItem('token');
        await dispatch({type:"REFRESHUSER",payload:{}});
    }
}