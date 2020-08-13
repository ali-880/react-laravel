export const message=(state="",action)=>{
    switch(action.type){
        case "REGISTER_CAPTCHA":return action.payload;
        case "REGISTER_CAPTCHA_remove":return action.payload;
        default:return state;
    }
}