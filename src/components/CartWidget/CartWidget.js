import carrito from "./carrito.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./CartWidget.css"

const CartWidget = () =>{
    const {cantidadTotal} = useContext(CartContext);

    console.log("Cantidad total:", cantidadTotal); // Agrega este console.log

    return (
        <Link to="/cart" className="" style={{ display: cantidadTotal > 0 ? "block" : "none"}}>
            <img className="iconoCarrito" src={carrito} alt="cart-widget"/>
            <span>{cantidadTotal}</span>
        </Link>
    )
}

export default CartWidget 