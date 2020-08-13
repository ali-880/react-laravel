import React from 'react';
import { FaFontAwesomeFlag } from "react-icons/fa";
const Person = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-header" style={{ background: "#ced6e0" }}>
                    <i className="mx-2"><FaFontAwesomeFlag style={{fontSize:"15px"}}/></i>
                    <input type="checkbox" className="btn btn-success btn-sm" />
                    <i className="mx-3">{props.name}</i>
                    <button className="btn btn-success" onClick={props.delete}>حذف</button>
                </div>
            </div>
        </div>
    );
}
export default Person;
