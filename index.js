class Producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}
const camisa = new Producto(1, "Camisa", 1500, "img/camisa.jpg");
const jeans = new Producto(2, "Jeans", 4500, "img/jeans.jpg");
const medias = new Producto(3, "Medias", 500, "img/medias.jpg");
const pantalondeportivo = new Producto(4, "Pantalon Deportivo", 3500, "img/pantalondeportivo.jpg");
const remera = new Producto(5, "Remera", 1200, "img/remera.jpg");
//array de los productos
const productos = [camisa, jeans, medias, pantalondeportivo, remera];
//array del carrito
let carrito =[];
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}
//mostrar productos a traves del dom
let contenedorProductos = document.getElementById("contenedorProductos");
const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text">$ ${producto.precio} </p>
                <button class="btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
                </div>
            </div>
            `
        contenedorProductos.appendChild(card);
        //boton agregar producto
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        })
    })
}
mostrarProductos();
//funcion para agregar al carrito
const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
        //localStorage
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    calcularTotal();
}
const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");
verCarrito.addEventListener("click", () =>{
    mostrarCarrito();
});
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML="";
    carrito.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text"> $ ${producto.precio} </p>
                <p class="card-text"> Cantidad: ${producto.cantidad} </p>
                <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar Producto</button>
                </div>
            </div>
            `
        contenedorCarrito.appendChild(card);
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}
//funcion para eliminar del carrito
const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
    //localstorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
//vaciar carrito
const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodoDelCarrito();
})
const eliminarTodoDelCarrito = () => {
    carrito = [];
    mostrarCarrito();
    //localstorage
    localStorage.clear();
}
//total de la compra
const total = document.getElementById("total");
const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach((producto) => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = ` $${totalCompra}`;
}
