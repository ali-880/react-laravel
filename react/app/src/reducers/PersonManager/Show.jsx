export const Show=(state=false,action)=>
{
    switch(action.type)
    {
        case "SHOW":return action.payload;
        default:return state;
    }
}