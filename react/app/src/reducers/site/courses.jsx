export const Courses=(state=[],action)=>{
    switch(action.type){
        case "ALL_COURSE":return [...action.payload];
        
        case "CREATE_COURSAE":return[...action.payload];
        default:return state;
    }
}