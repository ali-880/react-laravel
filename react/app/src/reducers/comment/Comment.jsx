export const Comment=(state=[],action)=>{
    switch(action.type){
        case "GetAllCommentCourse":return [...action.payload];
        default:return state;
    }
}