let nombre = prompt(`ingresa tu nombre`)
alert(`Bienvenido ${nombre}`)
let comprar = true
let total = 0
let producto = parseInt(prompt(`Deseas comprar: 1.Remera, 2.Jean, 3.Camisa, 4.Medias`))
while (comprar === true){
    if(producto === 1){
        total = total + 1000
    }else if (producto === 2){
        total = total + 2500
    }else if (producto === 3){
        total = total + 1500
    }else if (producto === 4){
        total = total + 300
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
