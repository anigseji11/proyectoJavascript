
let nombre = prompt('Indique su nombre y apellido')
let banco = parseInt(prompt('Seleccione un banco \n1- Banco Estado \n2- Banco de Chile\n3- Banco Santander'))
let bancoNombre = ''
let tasa = 0
let montoCredito = parseInt(prompt('Indique el monto del credito hipotecario'))
let anios = parseInt(prompt('Indique la cantidad de años para el pagov del credito'))



    if (banco === 1){
        tasa = 0.35
        bancoNombre = 'Banco Estado'
    }else if (banco === 2){
        tasa = 0.45
        bancoNombre = 'Banco de Chile'
    }else if (banco === 3){
        tasa = 0.55
        bancoNombre = 'Banco Santander'
    }else{
        banco = parseInt(prompt('Debe elegir un banco valido. \n1- Banco Estado \n2-Banco de Chile\n2-Banco Santander'))
    }




let montoConInteres = montoCredito + (montoCredito * tasa)


datos = '\nNombre banco: ' + bancoNombre + '\nAños del credito: ' + anios + '\nTasa: ' + tasa * 10 + '\nMonto del credito: ' + montoCredito + '\nMonto con interes: ' + montoConInteres + '\nMonto cuota mensual: ' + montoConInteres / (anios + 24)

alert('Estimado ' + nombre + ' estos son los datos de la simulacion de su credito: \n' + datos)





