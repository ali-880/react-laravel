import { bindActionCreators } from "redux";

export const Course=(state={},action)=>{
    switch(action.type)
    {
        case "DELETE_COURSE":return {...action.payload};
        case "UPDATE_COURSE":return {...action.payload};
        case "handleSingleVideoFor":
            {
                return {...action.payload}};
        default:return state;
    }
}
