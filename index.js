

let bancoNombre = ''
let tasa = 0
let mensaje = 'ELIJA EL BANCO CON EL QUE DESEA COTIZAR: \n';
let Datos = []

class Banco{
    constructor(nombre, tasa){
        this.nombre = nombre
        this.tasa = tasa
    }
}

let Bancos = []

const bancobci = new Banco("Banco BCI",0.35)
Bancos.push(bancobci)
const bancoEstado= new Banco("Banco Estado", 0.43)
Bancos.push(bancoEstado)
const bancoSantander= new Banco("Banco Santander", 0.55)
Bancos.push(bancoSantander)

for (let i = 0; i < Bancos.length; i++) {
    mensaje = mensaje.concat(i + 1, "- ", Bancos[i].nombre, "\n")
}

let nombre = prompt('Indique su nombre y apellido')
let banco = parseInt(prompt(mensaje))
let montoCredito = parseInt(prompt('Indique el monto del credito hipotecario'))
let anios = parseInt(prompt('Indique la cantidad de años para el pago del credito'))




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
       banco = prompt(mensaje)
    }

    Datos.push(nombre)
    Datos.push(bancoNombre)
    Datos.push(montoCredito)
    Datos.push(tasa)

    Datos.push(montoConInteres(montoCredito, tasa))
    Datos.push(montoCuota(montoConInteres))


   

    function montoConInteres(montoCredito, tasa){
        return montoCreditoTotal = montoCredito + (montoCredito * tasa)
    }

    function montoCuota(montoConInteres){
        return cuota = montoCreditoTotal / (anios * 12)
    }



console.log(Datos)


alert('Estimado ' + Datos[0] + ' se envio su cotizacion con los siguientes datos: \n' +
'Banco: ' + Datos[1] + '\n' +
'Monto Credito: ' + Datos[2] + '\n' +
'Tasa: ' + Datos[3] + '\n' +
'Monto Total Credito: ' + Datos[4] + '\n' +
'Cantidad Cuotas: ' + anios * 12 + '\n' +
'Monto Cuota: ' + Datos[5] + '\n')










