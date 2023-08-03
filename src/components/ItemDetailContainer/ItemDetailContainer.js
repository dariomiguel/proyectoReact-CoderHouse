import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail" 

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);

    useEffect(() => {
        getProductById("1")
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[])

    return(
        <div className="">
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer