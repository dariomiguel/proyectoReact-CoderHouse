import { createContext, useState, useMemo } from "react";
import Swal from "sweetalert2";

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

        const productoEnCarrito = carrito.find((prod) => prod.id === item.id);

        if (productoEnCarrito) {
            const carritoActualizado = carrito.map((prod) =>
                prod.id === item.id ? { ...prod, cantidad, subtotal } : prod
            );
            setCarrito(carritoActualizado);
            Swal.fire({
                icon: "warning",
                title: "Advertencia",
                text: "Usted ya seleccionó este producto, la cantidad se sobrescribirá",
            });
        } else {
            setCarrito((prev) => [...prev, { ...item, cantidad, subtotal }]);
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito!',
                showConfirmButton: false,
                timer: 1500, 
            });
        }
    };


    const removerItem = (itemId) => {
        const carritoUpdated = carrito.filter(prod => prod.id !== itemId)
        setCarrito(carritoUpdated)
    }

    const limpiarCarrito = () => {
        setCarrito([])
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
