export const Video=(state=[],action)=>{
    switch (action.type)
    {
        case "HandleShowVideo":return [...action.payload];
        case "handleVideoCreate":return [...action.payload];
        default:return state;
    }
}