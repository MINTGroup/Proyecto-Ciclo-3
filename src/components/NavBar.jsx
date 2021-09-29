import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return <nav>
        <ul className='navbar'>
            <li>Logo</li>
            <li>Navegacion1</li>
            <li>Navegacion2</li>
            <li>Navegacion3</li>
            <li>
                <Link to='/login'>
                    <button className='botonPrincipal'>
                        Log In
                    </button>
                </Link>
            </li>
            <li>
                <Link to='/registration'>
                    <button className='botonPrincipal'>
                        Register
                    </button>
                </Link>
            </li>
        </ul>
    </nav>
};
export default NavBar;