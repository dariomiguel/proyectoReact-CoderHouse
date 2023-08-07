import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return(
        <div className="columns is-multiline is-variable is-6">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList