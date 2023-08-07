const productos = [
    {
        id: "1",
        nombreProducto: "Iniciales Harry Potter",
        precio: 2000,
        categoria: "Cuadros",
        img: "../src/components/Galery/001catalogoCuadros/catCua001.jpg",
        stock: 5,
        descripcion: "Cuadro pintado en madera a base de acrilico, Fondo blanco letras negras"
    },
    {
        id: "2",
        nombreProducto: "Logo Twenty One pilot",
        precio: 3000,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua002.jpg",
        stock: 5,
        descripcion: "Cuadro pintado en madera a base de acrilico, Fondo negro con logo de la banda Twenty One Pilot"
    },
    {
        id: "3",
        nombreProducto: "Tucán",
        precio: 2000,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua003.jpg",
        stock: 25,
        descripcion: "Cuadro pintado en fibrofacil a base de acrilico, Fondo blanco con figura de tucán"
    },
    {
        id: "4",
        nombreProducto: "Hulk",
        precio: 2500,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua004.png",
        stock: 15,
        descripcion: "Cuadro pintado en madera a base de acrilico, con figura de Hulk"
    },
    {
        id: "5",
        nombreProducto: "2D",
        precio: 1500,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua005.jpg",
        stock: 10,
        descripcion: "Cuadro pintado en papel 240gr de 10x15 cm a base de acrilico con personaje 2-D de la banda Gorillaz"
    },
    {
        id: "6",
        nombreProducto: "Cuadro de Disco Twenty One Pilot, Scaled and Icy",
        precio: 3000,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua006a.jpg",
        stock: 7,
        descripcion: "Cuadro pintado en madera a base de acrilico, figura de disco Scaled and Icy"
    },
    {
        id: "7",
        nombreProducto: "Simbolo Harry Potter",
        precio: 1500,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua007.png",
        stock: 28,
        descripcion: "Cuadro de logo harry potter pintado en acrilico"
    },
    {
        id: "8",
        nombreProducto: "Limones",
        precio: 1500,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua008.jpg",
        stock: 50,
        descripcion: "Cuadro pintado a base de acrilico sobre limones"
    },
    {
        id: "9",
        nombreProducto: "Mujer Recostada",
        precio: 25000,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua009.jpg",
        stock: 1,
        descripcion: "Cuadro sobre lienzo, de mujer a base de acrilico"
    },
    {
        id: "10",
        nombreProducto: "Mujeres en el Abismo",
        precio: 100000,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua010.png",
        stock: 1,
        descripcion: "Cuadro sobre lienzo, de mujer en fondo negro a base de acrilico"
    },
    {
        id: "11",
        nombreProducto: "Insomnio",
        precio: 15000,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua011.jpg",
        stock: 4,
        descripcion: "Cuadro sobre lienzo, de mujer en fondo rojo y azul a base de acrilico"
    },
    {
        id: "12",
        nombreProducto: "Habitación",
        precio: 2000,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua012.jpg",
        stock: 2,
        descripcion: "Cuadro sobre lienzo de habitación en pesadillas"
    },
    {
        id: "13",
        nombreProducto: "Cariño",
        precio: 200000,
        categoria: "Cuadros",
        img: "./components/Galery/001catalogoCuadros/catCua013.jpg",
        stock: 1,
        descripcion: "Cuadro pintado en lienzo a base de acrilico sobre dos gatos durmiendo"
    },
    {
        id: "14",
        nombreProducto: "Maceta cuadrada",
        precio: 1800,
        categoria: "Artesanias",
        img: "./components/Galery/002catalogoArtesanias/catArt001.png",
        stock: 5,
        descripcion: "Maceta cuadrada artesanal de yeso pintada en acrilico"
    },
    {
        id: "15",
        nombreProducto: "Maceta redonda",
        precio: 2000,
        categoria: "Artesanias",
        img: "./components/Galery/002catalogoArtesanias/catArt002.jpg",
        stock: 25,
        descripcion: "Maceta redonda artesanal de yeso pintada en acrilico"
    },
    {
        id: "16",
        nombreProducto: "El viaje de Chihiro",
        precio: 2000,
        categoria: "Bordados",
        img: "./components/Galery/003catalogoBordados/catBor001.jpg",
        stock: 25,
        descripcion: "Bordado en marco circular de la pelicula El Viaje de Chihiro"
    },
    {
    id: "17",
    nombreProducto: "Pochita",
    precio: 2000,
    categoria: "Bordados",
    img: "./components/Galery/003catalogoBordados/catBor002.jpg",
    stock: 17,
    descripcion: "Bordado en marco circular de personaje de la serie ChainSawMan"
    },
    {
    id: "18",
    nombreProducto: "Elena",
    precio: 2000,
    categoria: "Esculturas",
    img: "./components/Galery/004catalogoEsculturas",
    stock: 4,
    descripcion: "Escultura de arcilla pintada y barnizada, con figura de mujer"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria.toLowerCase() === categoryId.toLowerCase()))
        },200)
    })
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        },200)
    })
}