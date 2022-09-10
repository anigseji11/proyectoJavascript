let monto, periodo, plazo, tasaMensual, tasaAnual, plazoMensual, plazoAnual, totalPagos

class Banco{
    constructor(nombre, tasa){
        this.nombre = nombre
        this.tasa = tasa
    }
}

const bancobci = new Banco("Banco BCI",3)
const bancoEstado= new Banco("Banco Estado",4)
const bancoSantander= new Banco("Banco Santander",5.5)

monto = prompt('Indique el monto que desea solicitar')

plazoEleccion = prompt('Presione 1- Plazo Mensual / 2- Plazo Anual')




    if (banco === 1){
        tasaAnual =  bancobci.tasa 
      bancoNombre = bancobci.nombre
    }else if (banco === 2){
        tasaAnual = bancoEstado.tasa
       bancoNombre = bancoEstado.nombre
    }else if (banco === 3){
       bancoNombre = bancoSantander.nombre
       tasaAnual = bancoSantander.tasa = 'Banco Santander'
    }else{
        banco = parseInt(prompt('Debe elegir un banco valido. \n1- Banco Estado \n2-Banco de Chile\n2-Banco Santander'))
    }


if ( plazoEleccion === 1 ) {
    plazo = plazo
  } else if ( plazoEleccion === 2 ) {
    plazo = plazo * 12
  } else {
    alert('No seleccionaste ningún tipo de plazo')
  }

  totalPagos = plazo

  function calcularTasaMensual () {
    tasaMensual = (tasaAnual / 100) / 12
    return tasaMensual
  }


  function calcularTasaMensual () {
    tasaMensual = (tasaAnual / 100) / 12
    return tasaMensual
  }
  function simularPrestamo () {
    establecerDatos()
    PagoMensual()
    calcularTotalPrestamo()
  }