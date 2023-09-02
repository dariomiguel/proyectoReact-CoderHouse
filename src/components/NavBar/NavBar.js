import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import iconoCapyArt from "./iconoCapyart.png";
import iconoCapyArtLetras from "./iconoCapyartLetras.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {setIsActive(!isActive)};

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                <img src={iconoCapyArt} alt="logo capyart" width={48} height={128} />
                <img src={iconoCapyArtLetras} alt="logo capyart Letras" width={128} height={128}/>
                </Link>
                <div className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    data-target="navbarExampleTransparentExample" onClick={toggleMenu} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <NavLink to={"/categoria/Cuadros"} className="navbar-item has-text-info">
                        Cuadros
                    </NavLink>
                    <NavLink to={"/categoria/Artesanias"} className="navbar-item has-text-info">
                        Artesanías
                    </NavLink>
                    <NavLink to={"/categoria/Bordados"} className="navbar-item has-text-info">
                        Bordados
                    </NavLink>
                    <NavLink to={"/categoria/Esculturas"} className="navbar-item has-text-info">
                        Esculturas
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
