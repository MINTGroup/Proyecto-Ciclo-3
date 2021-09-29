import React from 'react';
import Sidebar from 'components/SideBar';

const PrivateLayout = ({children}) => {
    return (
        <div>Layout privado (De contenido de los productos){children}</div>
    );
  
};
export default PrivateLayout;