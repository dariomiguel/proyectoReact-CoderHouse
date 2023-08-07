import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail" 

import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[itemId])

    return(
        <div className="is-half">
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer