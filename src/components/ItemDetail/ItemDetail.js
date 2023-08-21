import ItemCount from "../ItemCount/itemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, nombreProducto, img, categoria, descripcion, precio, stock}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const {agregarItem} = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)

        const item = {
            id, nombreProducto, precio
        }

        agregarItem(item, cantidad)
    }

    return(
        <div className="container has-text-centered">
            <div className="column">
                <article className="card">
                        <picture>
                            <img src={img} alt={nombreProducto}/>
                        </picture>
                    <div className="card-content">
                        <header>
                            <h2 className="title is-2">
                                {nombreProducto}
                            </h2>
                        </header>
                        <section>
                            <p className="subtitle">
                                Categoría: {categoria}
                            </p>
                            <p className="subtitle">
                                Descripción: {descripcion}
                            </p>
                            <p className="subtitle">
                                Precio: ${precio}
                            </p>
                        </section>
                    </div>
                    <footer>
                        {
                            cantidadAgregada > 0 ? (
                                <Link to="/cart" className="">Terminar Compra</Link>
                            ) : (
                            <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>)
                        }
                    </footer>
                </article>
            </div>
        </div>
    )
}

export default ItemDetail