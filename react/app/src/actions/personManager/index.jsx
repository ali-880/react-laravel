export const handleShow=()=>{
    return async (dispatch,getstate)=>{
        await dispatch({type:"SHOW_PERSONS",payload:getstate().persons})
    }
}
export const handleCreate=()=>{
    return async(dispatch,getstate)=>{
        console.log(getstate);
        const a=[...getstate().persons];
        let b={
            name:getstate().person,
            id:Math.floor(Math.random()*13000),
        }
        a.push(b);
        await dispatch({type:"CREATE",payload:a});
        await dispatch({type:"SETNAME",payload:""}); 
    }
}   
export const handlesetname=(re)=>{
    return async (dispatch)=>{
        await dispatch({type:"SETNAME",payload:re})
    }
}
export const handleDelete=(id)=>{
    return async (dispatch,getstate)=>{
        let a=[...getstate().persons];
        let b=a.filter(x=>x.id!==id);
        await dispatch({type:"DELETE",payload:b})
    }
}
export const handleShowPersons=()=>{
    return async(dispatch,getstate)=>{
        await dispatch({type:"SHOW",payload:!getstate().show})
    }
}