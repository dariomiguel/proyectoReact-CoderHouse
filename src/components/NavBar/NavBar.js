import iconoCapyArt from "./iconoCapyart.png"
import iconoCapyArtLetras from "./iconoCapyartLetras.png"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav className="navbar is-warning">
            <div className="navbar-brand" >
                <Link to="/">
                    <figure className="image is-128x128">
                        <a href="">
                            <img src={iconoCapyArt} alt="logo capyart"/>
                        </a>
                    </figure>
                </Link>
                    <a href="">
                        <figure className="image is-128x128">
                            <img src={iconoCapyArtLetras} alt="logo capyart Letras"/>
                        </figure>
                    </a>
                    <div className="navbar-burger" datatarget="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink to={`/category/`} className="navbar-item subtitle">
                            Galería
                        </NavLink>
                        <NavLink to={`/category/`} className="navbar-item subtitle" href="">
                            Catalogos
                        </NavLink>
                        <NavLink to={`/category/`} className="navbar-item subtitle" href="">
                            Contacto
                        </NavLink>
                        <NavLink to={`/category/`} className="navbar-item subtitle" href="">
                            Sobre Nosotros
                        </NavLink>
                        <NavLink to={`/category/`} className="navbar-item subtitle" href="">
                            <CartWidget/>
                        </NavLink>
                    </div>
                </div>
        </nav>

        
    )
}

export default NavBar