let totalCompra = 0
let productosSeleccionado = parseInt(prompt('Elija 1-Iphone, 2-Mac'))
let seguirCompra = true

while(seguirCompra === true){
if (productosSeleccionado === 1){
    totalCompra = totalCompra + 500
} else if (productosSeleccionado === 2){
    totalCompra = totalCompra + 1000
} else{
    productosSeleccionado = parseInt(prompt('Producto no valida. Elija 1-Iphone, 2-Mac'))
    continue
}

desicion = parseInt(prompt('Desea seguir comprando 1-SI 2-NO'))

if (desicion === 1){
    productosSeleccionado = parseInt(
        prompt('Elija 1-Iphone, 2-Mac')
    )
}else if (desicion === 2){
    seguirCompra = false
}


}


alert('El total de la compra es ' + totalCompra)


function calcularprecioConDescuento(valor){
    let descuento = 0
    if(valor <= 1000){
        descuento = 10
    }else if(valor > 1000 && valor <= 1500){
        descuento = 15
    }

    let valorDescuento = valor *(descuento/100)
    valor = valor - valorDescuento
    return valor
}
let valorConDescuento = calcularprecioConDescuento(totalCompra)

alert('El valor con descuento = ' + valorConDescuento)




function calcularPrecioConImpuesto(valor){
    const impuestos = valor * (19/100)

    return valor + impuestos


}

let valorFinal = calcularPrecioConImpuesto(valorConDescuento)
alert('el valor final a opagar es de ' + valorFinal)
