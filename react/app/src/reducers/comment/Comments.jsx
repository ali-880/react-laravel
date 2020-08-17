export const Comments=(state=[],action)=>{
    switch(action.type){
        case "GetAllComments":return [...action.payload];
        case "setValueComment":return [...action.payload];
        default:return state;
    }
}