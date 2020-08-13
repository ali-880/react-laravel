import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FaPlus } from "react-icons/fa";

import { handlesetname, handleShowPersons, handleCreate } from './../../actions/personManager/index';
import Persons from './Persons';
import Header from './common/Header';
const Crsh = () => {
    const [get, set] = useState({ st: false })
    const show = useSelector(state => state.show)
    const hm = () => {
        set({ st: !get.st })
    }
    const dispatch=useDispatch();
    const person=useSelector(state=>state.person)
    const persons=useSelector(state=>state.persons)
    return (
        <div className="rtl container" style={{direction:"rtl"}}>
            <Header/>
            <button className="btn btn-success" onClick={() => dispatch(handleCreate())} onMouseOver={hm}><FaPlus/></button>
            <input type="text" value={person} onChange={(event) => dispatch(handlesetname(event.target.value))}></input>
            <button className="btn btn-danger" onClick={() => dispatch(handleShowPersons())}>نمایش</button>
            {show?<Persons/>:null}
        </div>
    );
}
export default Crsh;