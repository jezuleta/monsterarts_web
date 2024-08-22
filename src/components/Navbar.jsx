import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false)

    const links = [
        { id: 1, link: 'Home' },
        { id: 2, link: 'Tienda' },
        { id: 3, link: 'Ingresar' },
        { id: 4, link: 'Carrito' },
        { id: 5, link: 'Contactos' },
        { id: 6, link: 'Nosotros' },
    ];

    return (
        <div className={NavbarOpen === false ? styles.nav : styles.navOpen}>

            <div>
                <img src='public/images/logo.png' alt="Logo" className={NavbarOpen === false ? styles.logo : styles.logoOpen} />
            </div>

            {!NavbarOpen && <p>Monster Arts | Laboratorio Creativo</p>}
            {!NavbarOpen ? (
                <TiThMenu onClick={() => setNavbarOpen(!NavbarOpen)} size={25} />
            ) : (
                <IoMdCloseCircle onClick={() => setNavbarOpen(!NavbarOpen)} size={25} />
            )}
            {NavbarOpen && (
                <ul>
                    {links.map((x) => (
                        <div>
                            <Link>{x.link}</Link>
                        </div>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default Navbar;
