export const Isopen=(state=false,action)=>{
    switch(action.type){
        case "ISOPEN":return action.payload;
        default:return state;
    }
}