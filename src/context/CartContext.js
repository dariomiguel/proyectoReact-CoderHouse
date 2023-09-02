import { createContext, useState, useMemo } from "react";

export const CartContext = createContext({
    carrito: [],
    total: 0,
    agregarItem: () => {},
})

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    console.log("Este es el carrito actual")
    console.log(carrito)

    const agregarItem = (item, cantidad) => {
        const subtotal = item.precio * cantidad;
        if(!hayEnCarrito(item.id)){
            setCarrito(prev => [...prev, {...item, cantidad, subtotal}])
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

    // Calcular el total cuando el carrito cambie de valor 
    const total = useMemo(() => {
        return carrito.reduce((sum, item) => sum + item.subtotal, 0);
    }, [carrito]); 

    console.log("Total:", total);

    const cantidadTotal = useMemo(() => {
        return carrito.reduce((sum, item) => sum + item.cantidad, 0);
    }, [carrito]);

    return (
        <CartContext.Provider value={{ carrito, total, cantidadTotal, agregarItem, removerItem, limpiarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}
