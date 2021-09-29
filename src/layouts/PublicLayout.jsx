import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from "../components/SideBar";

const PublicLayout = ({children}) => {
    return (
        <div className={"landingPage"}>
            <NavBar></NavBar>
            <div className={"landingPageContent"}>
                <h3>Layout público (Landing page)
                </h3></div>

        </div>
    );

};
export default PublicLayout;