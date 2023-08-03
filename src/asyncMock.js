const productos = [
    {
        id: "1",
        nombreProducto: "Iphone 12",
        precio: 1000,
        categoria: "Celular",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvx8N4HIvpTC171S71DSkCv4DPf6B3a4EhZUFNY1TdvFKc1NqmnBVq66cGuZfr9nYLpk&usqp=CAU",
        stock: 25,
        descripcion: "Descripción de Iphone 12"
    },
    {
        id: "2",
        nombreProducto: "Iphone 13",
        precio: 1500,
        categoria: "Celular",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvx8N4HIvpTC171S71DSkCv4DPf6B3a4EhZUFNY1TdvFKc1NqmnBVq66cGuZfr9nYLpk&usqp=CAU",
        stock: 25,
        descripcion: "Descripción de Iphone 13"
    },
    {
        id: "3",
        nombreProducto: "Iphone 14",
        precio: 2000,
        categoria: "Celular",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvx8N4HIvpTC171S71DSkCv4DPf6B3a4EhZUFNY1TdvFKc1NqmnBVq66cGuZfr9nYLpk&usqp=CAU",
        stock: 25,
        descripcion: "Descripción de Iphone 14"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },500)
    })
}

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.categoria === categoria))
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        },500)
    })
}