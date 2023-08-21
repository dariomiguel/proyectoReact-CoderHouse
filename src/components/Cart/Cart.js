import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
    const { carrito, limpiarCarrito, cantidadTotal, total} = useContext(CartContext)

    if(cantidadTotal === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {carrito.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => limpiarCarrito()} className="">Limpiar carrito</button>
            <Link to="/checkout" className="">Checkout</Link>
        </div>
    )
}

export default Cart 