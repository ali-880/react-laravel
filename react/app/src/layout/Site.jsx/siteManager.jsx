import React from 'react';
import NavTop from '../../component/site/common/NavTop';
import Header from '../../component/site/common/Header';
import NavvMain from './../../component/site/common/NavMain';
import Footer from '../../component/site/common/Footer';
import "./st.css";
import { withRouter } from 'react-router';
const Layout2 = (props) => {
    return (
        <div className="container">
            <div className="landing-layer">
                <div className="container">
                    <NavTop />
                    {props.location.pathname==="/"?<Header />:null}
                </div>
            </div>
            
                    <NavvMain />
              
            {props.children}
            <Footer/>
        </div>
    );
}
export default withRouter( Layout2);
