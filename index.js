let nombre = prompt(`ingresa tu nombre`)
alert(`Bienvenido ${nombre}`)
let comprar = true
let total = 0
class Producto {
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
const remera = new Producto (1, "Remera", 1000, 20);
const jean = new Producto (2, "Jean", 2500, 10);
const camisa = new Producto (3, "Camisa", 1500, 15);
const medias = new Producto (4, "Medias", 300, 50);
const productos = [remera, jean, camisa, medias];

let producto = parseInt(prompt(`Deseas comprar: 1.Remera, 2.Jean, 3.Camisa, 4.Medias`))
while (comprar === true){
    if(producto === remera.id){
        total = total + remera.precio
        remera.stock = remera.stock - 1
    }else if (producto === jean.id){
        total = total + jean.precio
        jean.stock = jean.stock - 1
    }else if (producto === camisa.id){
        total = total + camisa.precio
        camisa.stock = camisa.stock - 1
    }else if (producto === medias.id){
        total = total + medias.precio
        medias.stock = medias.stock - 1
    }
let seguirComprando =parseInt(prompt(`¿Deseas agregar algo más?: 1.Si, 2.No`))
if(seguirComprando === 1){
    producto = parseInt(prompt(`Deseas comprar: 1.Remera, 2.Jean, 3.Camisa, 4.Medias`))
}else comprar = false
}
function descuento(total){
    let descuento = 0
    if (total <= 1000){
        descuento = 10
    }else if (total > 1000 && total <= 5000){
        descuento = 15
    }else descuento = 20
    let totalDescuento = total * (descuento / 100)
    let importeFinal = total - totalDescuento
    return importeFinal
}
let totalConDescuento = descuento(total)
alert(`${nombre} el total de tu compra es de $${totalConDescuento}`)
for (let index = 0; index < 4; index++){
    console.log(productos[index].nombre);
    console.log(productos[index].stock);
}

