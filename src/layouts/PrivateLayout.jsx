import React from 'react';
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/styles.css"

const PrivateLayout = ({children}) => {
    return (
        <div>
            <h3>
            Layout privado (De contenido de los productos){children}
            </h3>
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </div>
    );
  
};
export default PrivateLayout;