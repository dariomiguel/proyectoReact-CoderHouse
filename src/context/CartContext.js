import { createContext, useState } from "react";

export const CartContext = createContext({
    carrito: []
})

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    console.log(carrito)

    const agregarItem = (item, cantidad) => {
        if(!hayEnCarrito(item.id)){
            setCarrito(prev => [...prev, {...item, cantidad}])
        }else{
            console.error("El producto ya fue agregado");
        }
    }

    const removerItem = (itemId) => {
        const carritoUpdated = carrito.filter(prod => prod.id !== itemId)
        setCarrito(carritoUpdated)
    }

    const limpiarCarrito = () => {
        setCarrito([])
    }

    const hayEnCarrito = (itemId) => {
        return carrito.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ carrito, agregarItem, removerItem, limpiarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
