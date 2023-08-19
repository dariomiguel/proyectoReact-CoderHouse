import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, nombreProducto, img, precio, stock}) => {
    return(
        //Las columnas en tablet serán 4 columnas y en escritorio 3 columnas 
        <div className="column is-4-tablet is-3-desktop"> 
            <div className="card">
                <div className="card-image">
                    <figure className="image aspect-square">
                        <img src={img} alt={nombreProducto}/>
                    </figure>
                </div>
                <div className="card-content">
                    <p>
                        $ {precio}
                    </p>
                    <p className="title is-size-5">
                        {nombreProducto}
                    </p>
                    <p className="subtitle is-6">
                        Stock disponible: {stock}
                    </p>
                </div>
                <footer className="card-footer">
                    <Link to={`/item/${id}`} className="card-footer-item has-text-grey">Ver detalle</Link>
                </footer>
            </div>
        </div>
    )
}

export default Item