export const Person=(state="",action)=>
{
    switch(action.type)
    {
        case "SETNAME":return action.payload;
        default:return state;
    }
}