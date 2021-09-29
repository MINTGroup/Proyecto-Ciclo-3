import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const PublicLayout = ({children}) => {
    return (
        <div>
            <h3>Layout público (Landing page)</h3>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );

};
export default PublicLayout;