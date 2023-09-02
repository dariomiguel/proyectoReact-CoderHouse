import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, nombreProducto, cantidad, precio, img }) => {
    const { removerItem } = useContext(CartContext);

    const subtotal = cantidad * precio;

    const handleRemoverItem = () => {
        removerItem(id);
    };

    return (
        <div className="box">
            <div className="columns is-vcentered">
                <div className="column">
                    <p className="title is-5">{nombreProducto}</p>
                </div>
                <figure className="column is-48x48">
                    <img src={img} alt={nombreProducto}/>
                </figure>
                <div className="column">
                    <p className="subtitle is-6">Cantidad: {cantidad}</p>
                </div>
                <div className="column">
                    <p className="subtitle is-6">Precio por unidad: ${precio}</p>
                </div>
                <div className="column">
                    <p className="subtitle is-6">Subtotal: ${subtotal}</p>
                </div>
                <div className="column">
                    <button
                        className="button is-danger is-small"
                        onClick={handleRemoverItem}
                    >
                        Remover
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
