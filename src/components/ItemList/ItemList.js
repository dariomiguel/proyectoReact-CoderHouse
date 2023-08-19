import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return(
        <div className="container">
            {/*Titulo, con el texto centrado, con un tamaño de 3  */}
            <h3 className="title has-text-centered is-size-3">Titulo XXXXXXXX</h3>
            {/*Contenedor de columnas marginTop 5, tendra un ancho de 8 columnas de las 12, tiene un espacio variable   */}
            <div className="columns mt-5 is-8 is-variable">
                {productos.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
    )
}

export default ItemList