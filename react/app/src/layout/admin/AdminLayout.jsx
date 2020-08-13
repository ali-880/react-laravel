import React, { useState } from 'react';
import Dashbord from './../../component/admin/Component/Dashbord';
import Info from './../../component/admin/Component/Info';
import TopNav from '../../component/admin/Component/TopNav';

const AdminLayoute = (props) => {
    return (
        <div className="hold-transition sidebar-mini" style={{ marginRight: "25px", direction: "rtl", textAlign: "right" ,fontSize:"15px"}}>
            <div className="wrapper">
                <TopNav />
                <Dashbord />
                <div className="content-wrapper">
                    <section className="content">
                        <Info />
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    );
}
export default AdminLayoute;