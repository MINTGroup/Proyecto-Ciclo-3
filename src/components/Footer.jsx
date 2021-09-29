import React from "react";
import logo from "../media/logo.png"

const Footer = () => {
    return ( <div> <h3>Footer</h3>
        <footer className="footer">
            <section className="footer-content">
                <ul>
                    <h3>Developed by: </h3>
                    <img className="footer-img" src={logo}/>

                    <li>MINT - Software development.
                    </li>
                    <h3 className="contact">Contact.</h3>
                </ul>
            </section>
            <section className="footer-content">
                <ul>
                    <li>Misión TIC 2022.
                    </li>
                    <li>Universidad de Antioquia - Ministerio TIC.
                    </li>
                    <li>Colombia.
                    </li>
                    <li>2021.
                    </li>
                    <li>Rights Reserved. (?)
                    </li>
                </ul>

            </section>
        </footer>
        </div>

    );
};

export default Footer;