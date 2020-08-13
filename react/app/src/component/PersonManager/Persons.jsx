import React from 'react';
import Person from './Person';
import { useSelector, useDispatch } from 'react-redux';
import { handleDelete } from '../../actions/personManager';
const Persons = () => {
    const persons=useSelector(state=>state.persons);
    const dispatch=useDispatch();
    console.log("Dasdasdad");
    return ( 
        <div>
            {persons.map(person=>(
                <Person key={person.id} name={person.name} delete={()=>dispatch(handleDelete(person.id))}/>
            ))}
        </div>
     );
}
export default Persons;