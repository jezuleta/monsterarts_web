import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { useScrollPosition } from "../Hooks/ScrollPosition";

 /*+-----------------------------------------------------------------------------------+*/   

const Navbar = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);

    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        heigth: window.innerHeight,
    });

    const detectDimesion = () =>{
        setWindowDimension({
            width: window.innerWidth,
            heigth: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectDimesion)
        windowDimension.width > 800 && setNavbarOpen(false)
        return () =>(
            removeEventListener('resize', detectDimesion)
        )
    },[windowDimension])

    const links = [
        { id: 1, link: 'Home' },
        { id: 2, link: 'Tienda' },
        { id: 3, link: 'Ingresar' },
        { id: 4, link: 'Carrito' },
        { id: 5, link: 'Nosotros' },
        { id: 6, link: 'Contactos' },
    ];

    const scrollPosition = useScrollPosition();

 /*+-----------------------------------------------------------------------------------+*/   

    return (
        <div className={NavbarOpen ? styles.navOpen : scrollPosition > 0 ? styles.navOnScroll : styles.nav}>

{/*
NavbarOpen ? styles.NavOpen
: scrollPosition > 0 ? styles.navOnScroll
 : styles.Navbar
*/}

            <div>
                {NavbarOpen ? (
                    <img src='public/images/logo_blanco-01.png' alt="Logo" className={styles.logoOpen} />
                ) : (
                    <img src='public/images/logo.png' alt="Logo" className={scrollPosition > 0 ? styles.logoOnScroll : styles.logo} />
                )}
            </div>


            {!NavbarOpen && windowDimension.width < 800 ? (
                <TiThMenu onClick={() => setNavbarOpen(!NavbarOpen)} size={25}/>
            ) :  windowDimension.width < 800 && (
                <IoMdCloseCircle onClick={() => setNavbarOpen(!NavbarOpen)} color="#f6f6f6" size={25} />
            )}
            

            {(NavbarOpen || windowDimension.width > 800) && (
                    <ul className={styles.linksContainer}>
                        {links.map((x) => (
                            <div>

                                <Link to={x.link} onClick={() => setNavbarOpen(false)} 
                                smoot={true} duration={500} 
                                className={styles.navLink}>
                                    {x.link}</Link>

                                <div className={styles.border}></div>

                            </div>
                        ))}
                    </ul>
            )}

        </div>
    );
};

export default Navbar
