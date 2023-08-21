import { createContext, useState } from "react";

export const CartContext = createContext({
    carrito: []
})

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    console.log(carrito)

    const agregarItem = (item, quantity) => {
        if(!isInCarrito(item.id)){
            setCarrito(prev => [...prev, {...item, quantity}]);
        }else{
            console.error("El producto ya fue agregado");
        }
    }

    const removeItem = (itemId) => {
        const carritoUpdated = carrito.filter(prod => prod.id !== itemId)
        setCarrito(carritoUpdated)
    }
    const clearCarrito = () => {
        setCarrito([])
    }

    const isInCarrito = (itemId) => {
        return carrito.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ carrito, agregarItem, removeItem, clearCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
