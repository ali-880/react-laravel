import axios from "axios";
import { toast } from "react-toastify";
export const RegisterApi = (val, event, email, password, name, captcha, confirmcaptcha, conpass) => {
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
                try{
                    let c = await axios.post("http://127.0.0.1:8000/api/register", JSON.stringify(person), { headers: { "Content-Type": "application/json" } });
                    toast.success(c.data.message, { position: "bottom-right" })
                }
                catch(e){
                    if(e.response.status==422)
                    {
                        toast.error("ایمیل شما قبلا در سامانه وارد شده است",{position:"bottom-right"});
                    }
                }
        }}else {
            val.showMessages();
        };

    }
}
export const handleRegisterCaptcha = () => {
    return async (dispatch, getstate) => {
        await dispatch({ type: "REGISTER_CAPTCHA", payload: "لضفا در وارد کردن کد بالا دقت کنید" })
    }
}
export const handleRegisterConfirm = () => {
    return async (dispatch, getstate) => {
        await dispatch({ type: "REGISTER_CONFIRMED", payload: "رمز وارد شده با رمز مطابقت ندارد" })
    }
}
export const handleLogin=(ad,event,email,password,confirme)=>{
    return async (dispatch,getstate)=>{
        event.preventDefault();
        if(password!=confirme){
            await dispatch({ type: "REGISTER_CONFIRMED", payload: "رمز وارد شده با رمز مطابقت ندارد" });
        }else{
            let person={
                email,
                password,
                confirme,
            }
            try{
                let a=await axios.post("http://127.0.0.1:8000/api/login",JSON.stringify(person),{headers:{"Content-Type":"application/json"}})
                await dispatch({type:"Login",payload:a.data.data});
                console.log("dsadad");
                toast.success(a.data.message,{position:"bottom-right"});
                localStorage.setItem("token",a.data.token);
                ad("/")
            }
            catch(e){
                console.log("Dasd");
            }
        }
    }
}