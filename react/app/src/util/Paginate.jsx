export const Paginate=(courses)=>{
    const all=Math.ceil(courses.length/2);
    let ab=[];
    for(let i=1;i<=all;i++)
    {
        ab.push(i);
    }
    return ab;
}