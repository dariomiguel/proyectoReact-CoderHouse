import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({id, nombreProducto, img, categoria, descripcion, precio, stock}) => {
    return(
        <div className="container has-text-centered">
            <div className="column is-half">
                <article className="card">
                    <div className="card-content">
                        <header>
                            <h2 className="title is-2">
                                {nombreProducto}
                            </h2>
                        </header>
                        <picture>
                            <img src={img} alt={nombreProducto}/>
                        </picture>
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
                        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
                    </footer>
                </article>
            </div>
        </div>
    )
}

export default ItemDetail