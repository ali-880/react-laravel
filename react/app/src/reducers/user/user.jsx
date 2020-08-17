export const User=(state={},action)=>{
        switch(action.type){
            case "Login":return {...action.payload};
            case "checkAuth":return {...action.payload};
            case "REFRESHUSER":return action.payload;
            default :return state;
        }
}