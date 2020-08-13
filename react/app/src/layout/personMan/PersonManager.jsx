import React from 'react';
import Header from './../../component/PersonManager/common/Header';
const Layout1 = (props) => {
    return (
        <div>
            <div className="rtl text-center container">
                <Header />
                {props.children}
            </div>
        </div>
    );
}
export default Layout1;
