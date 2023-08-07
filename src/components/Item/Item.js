import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, nombreProducto, img, precio, stock}) => {
    return(
        <article className="card column is-one-quarter has-text-centered ">
            <div className="card-content">
                <header className="title is-4">
                    <h2>{nombreProducto}</h2>
                </header>
                <div className="is-centered">
                    <picture className="image is-square">
                        <img src={img} alt={nombreProducto}/>
                    </picture>
                </div>
                <section>
                    <p className="subtitle is-6">
                        Precio: ${precio}
                    </p>
                    <p className="subtitle is-6">
                        Stock disponible: {stock}
                    </p>
                </section>
            </div>
            <footer className="card-footer">
                <Link to={`/item/${id}`} className="card-footer-item">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item