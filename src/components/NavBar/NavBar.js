import iconoCapyArt from "./iconoCapyart.png"
import iconoCapyArtLetras from "./iconoCapyartLetras.png"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <nav className="navbar is-warning">
            <div className="navbar-brand" >
                    <figure className="image is-128x128">   
                        <a href="">
                            <img src={iconoCapyArt} alt="logo capyart"/>
                        </a>
                    </figure>
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
                        <a className="navbar-item subtitle" href="">
                            Galería
                        </a>
                        <a className="navbar-item subtitle" href="">
                            Catalogos
                        </a>
                        <a className="navbar-item subtitle" href="">
                            Contacto
                        </a>
                        <a className="navbar-item subtitle" href="">
                            Sobre Nosotros
                        </a>
                        <a className="navbar-item subtitle" href="">
                            <CartWidget/>
                        </a>
                    </div>
                </div>
        </nav>

        
    )
}

export default NavBar