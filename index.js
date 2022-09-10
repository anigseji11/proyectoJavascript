
let nombre = prompt('Indique su nombre y apellido')
let banco = parseInt(prompt('Seleccione un banco \n1- Banco Estado \n2- Banco de Chile\n3- Banco Santander'))
let bancoNombre = ''
let tasa = 0
let montoCredito = parseInt(prompt('Indique el monto del credito hipotecario'))
let anios = parseInt(prompt('Indique la cantidad de años para el pagov del credito'))

let Datos = []

class Banco{
    constructor(nombre, tasa){
        this.nombre = nombre
        this.tasa = tasa
    }
}

const bancobci = new Banco("Banco BCI",0.35)
const bancoEstado= new Banco("Banco Estado",0.45)
const bancoSantander= new Banco("Banco Santander",0.55)




    if (banco === 1){
      tasa =  bancobci.tasa 
      bancoNombre = bancobci.nombre
    }else if (banco === 2){
       tasa = bancoEstado.tasa
       bancoNombre = bancoEstado.nombre
    }else if (banco === 3){
       bancoNombre = bancoSantander.nombre
       tasa = bancoSantander.tasa = 'Banco Santander'
    }else{
        banco = parseInt(prompt('Debe elegir un banco valido. \n1- Banco Estado \n2-Banco de Chile\n2-Banco Santander'))
    }
    Datos.push(nombre)
    Datos.push(bancoNombre)
    Datos.push(tasa)


   

    function montoConInteres (montoCredito, tasa){
        return montoCreditoTotal = montoCredito + (montoCredito * tasa)
    }


Datos.push(montoCredito)
Datos.push(montoConInteres(montoCredito, tasa))

console.log(Datos)
let mensaje = ""

for (let i= 0 ; i < Datos.length; i++ ) {
 
     mensaje += mensaje && "-" && Datos[i] && "\n";
        
    
}


alert(mensaje)



alert('Estimado ' + nombre + ' estos son los datos de la simulacion de su credito: \n' + datos)





