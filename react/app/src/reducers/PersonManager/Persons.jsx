export const Persons=(state=[],action)=>
{
    switch(action.type)
    {
        case "SHOW_PERSONS":return action.payload;
        case "DELETE":return [...action.payload];
        case "CREATE":return [...action.payload];
        default:return state;
    }
}