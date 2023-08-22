import iconoCapyArt from "./iconoCapyart.png"
import iconoCapyArtLetras from "./iconoCapyartLetras.png"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () =>{
    return(
        <nav className="navbar">
            <div className="navbar-brand" >
                <Link to="/">
                    <figure className="image is-128x128">
                            <img src={iconoCapyArt} alt="logo capyart"/>
                    </figure>
                </Link>
                        <figure className="image is-128x128">
                            <img src={iconoCapyArtLetras} alt="logo capyart Letras"/>
                        </figure>
                    <div className="navbar-burger" datatarget="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink to={"/category/Cuadros"} className="navbar-item subtitle">
                            Cuadros
                        </NavLink>
                        <NavLink to={"/category/Artesanias"} className="navbar-item subtitle">
                            Artesanías
                        </NavLink>
                        <NavLink to={"/category/Bordados"} className="navbar-item subtitle">
                            Bordados
                        </NavLink>
                        <NavLink to={"/category/Esculturas"} className="navbar-item subtitle">
                            Esculturas
                        </NavLink>
                        <NavLink to={"/"} className="navbar-item subtitle">
                            <CartWidget/>
                        </NavLink>
                    </div>
                </div>
        </nav>

        
    )
}

export default NavBar