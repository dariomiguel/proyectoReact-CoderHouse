import { useState } from "react"

const ItemCount = ({stock, initial, onAdd})=>{
    const [cantidad, setCantidad] = useState(initial)

    const incrementar = () => cantidad < stock ? setCantidad(cantidad + 1):null;
    const disminuir = () => cantidad > 1 ? setCantidad(cantidad - 1):null;

    return(
        <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
                <div className="column">
                    <div className="buttons has-addons is-centered">
                        <button className="button" onClick={disminuir}>-</button>
                        <h4 className="button">{cantidad}</h4>
                        <button className="button" onClick={incrementar}>+</button>
                        <button className="button" onClick={() => onAdd(cantidad)} disabled={!stock}>
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;