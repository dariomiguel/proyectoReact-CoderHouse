import React from "react";
import { useLocation } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
    const location = useLocation();
    
    const titles = {
        "/categoria/Artesanias": "Artesanias",
        "/categoria/Bordados": "Bordados",
        "/categoria/Esculturas": "Esculturas",
        "/categoria/Cuadros": "Cuadros",
    };

    const titulo = titles[location.pathname] || "Bienvenido!!!";

    return (
        <div className="container">
        {/* Título */}
        <h2 className="title has-text-centered is-size-3">{titulo}</h2>
        <div className="columns mt-5 is-8 is-variable">
            {productos.map((prod) => (
            <Item key={prod.id} {...prod} />
            ))}
        </div>
        </div>
    );
};

    export default ItemList;
