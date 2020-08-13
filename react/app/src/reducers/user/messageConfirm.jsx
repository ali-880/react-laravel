export const messageConfirmed=(state="",action)=>{
    switch(action.type){
        case "REGISTER_CONFIRMED":return action.payload
        case "REGISTER_CONFIRMED_remove":return action.payload
        default:return state;
    }
}