import iconoCapyArt from "./iconoCapyart.png";
import iconoCapyArtLetras from "./iconoCapyartLetras.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src={iconoCapyArt} alt="logo capyart" width={48} heigth={128}/>
                    <img src={iconoCapyArtLetras} alt="logo capyart Letras" width={128} heigth={128}/>
                </Link>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu ">
                <div className="navbar-start">
                    <NavLink to={"/category/Cuadros"} className="navbar-item has-text-info">
                        Cuadros
                    </NavLink>
                    <NavLink to={"/category/Artesanias"} className="navbar-item has-text-info">
                        Artesanías
                    </NavLink>
                    <NavLink to={"/category/Bordados"} className="navbar-item has-text-info">
                        Bordados
                    </NavLink>
                    <NavLink to={"/category/Esculturas"} className="navbar-item has-text-info">
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
