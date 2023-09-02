import { useContext, useState } from "react";
import { Timestamp, getDocs, query, where, addDoc, writeBatch, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { carrito, cantidadTotal, limpiarCarrito } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        if (!carrito || carrito.length === 0) {
            console.error("El carrito está vacío.");
            return;
        }
        
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: carrito,
                cantidadTotal: cantidadTotal,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);

            const outOfStock = [];
            const ids = carrito.map(prod => prod.id);
            const productsRef = collection(db, 'productos');
            const productosAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', ids)));
            const { docs } = productosAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCarrito = carrito.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCarrito?.cantidad;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                limpiarCarrito();
            } else {
                console.error('Hay Productos que están fuera de Stock');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El Id de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>CheckOut</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;
