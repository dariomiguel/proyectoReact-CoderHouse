import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { carrito, limpiarCarrito, cantidadTotal, total } = useContext(CartContext);

    if (cantidadTotal === 0) {
        return (
        <div className="container has-text-centered mt-6">
            <h1 className="title is-3">Tu carrito está vacío</h1>
            <Link to="/" className="button is-link is-light">
            Ver Productos
            </Link>
        </div>
        );
    }

    return (
        <div className="container mt-6">
            <h1 className="title is-3 mb-4">Carrito de Compras</h1>
            <div className="columns is-variable is-4 is-multiline">
                {carrito.map((p) => (<CartItem key={p.id} {...p} />))}
            </div>
            <div className="columns is-vcentered">
                <div className="column is-6">
                    <h3 className="title is-4">Total: ${total}</h3>
                </div>
                <div className="column is-6 has-text-right">
                    <div className="buttons">
                        <Link to="/checkout" className="button is-primary">
                        Ir al Checkout
                        </Link>
                        <Link to="/" className="button is-link is-light">
                        Seguir Comprando
                        </Link>
                        <button onClick={() => limpiarCarrito()} className="button is-danger is-light">
                        Limpiar Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
