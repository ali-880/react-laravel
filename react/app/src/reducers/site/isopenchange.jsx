export const IsopenChange=(state=false,action)=>{
    switch(action.type){
        case "IsopenChange":return action.payload;
        default:return state;
    }
}