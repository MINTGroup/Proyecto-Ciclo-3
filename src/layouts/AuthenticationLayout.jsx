import React from 'react';
import Logo from 'media/logo.png';
import { Link } from 'react-router-dom';

const AuthenticationLayout = ({ children }) => {
    return (
        <div><h3>
            Layout de autenticación
        </h3>
            {children} </div>

    );
};
export default AuthenticationLayout;