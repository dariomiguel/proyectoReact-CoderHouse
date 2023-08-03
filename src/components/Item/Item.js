import { Link } from "react-router-dom"

const Item = ({id, nombreProducto, img, precio, stock}) => {
    return(
        <article>
            <header>
                <h2>
                    {nombreProducto}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombreProducto}/>
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item