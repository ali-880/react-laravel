import lodash from 'lodash';
export const Pagination=(array,perpage,currentpage)=>{
    let start=(currentpage-1)*perpage;
    return lodash(array).slice(start).take(perpage).value();
}