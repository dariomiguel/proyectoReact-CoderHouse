import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({id, nombreProducto, img, categoria, descripcion, precio, stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombreProducto}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombreProducto} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoría: {categoria}
                </p>
                <p className="Info">
                    Descripción: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail