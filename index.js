

let bancoNombre = ''
let tasa = 0
let mensaje = 'ELIJA EL BANCO CON EL QUE DESEA COTIZAR: \n';
let Datos = []
const nombre = document.getElementById('Nombre')
const fecha = document.getElementById('Fecha')
const banco = document.getElementById('Banco')
const montoCredito = document.getElementById('Monto')
const anios = document.getElementById('Plazo')


const button = document.getElementById('boton')
const selectTag = document.getElementById('Banco')

const cuadroDatos = document.getElementById('datos')

selectTag.addEventListener('change', Cambio)
button.addEventListener('click', presionar)


class Banco {
    constructor(nombre, tasa) {
        this.nombre = nombre
        this.tasa = tasa
    }
}

let Bancos = []

const bancobci = new Banco("Banco BCI", 0.35)
Bancos.push(bancobci)
const bancoEstado = new Banco("Banco Estado", 0.43)
Bancos.push(bancoEstado)
const bancoSantander = new Banco("Banco Santander", 0.55)
Bancos.push(bancoSantander)


Bancos.forEach((banco) => {
    const option = document.createElement("option")
    option.innerText = `${banco.nombre}`
    option.setAttribute('value', `${banco.tasa}`)
    selectTag.append(option)
});

function Cambio(e) {
    bancoNombre = e.target.selectedOptions[0].innerText
    tasa = e.target.value


}

var columnas = ['#', 'Descripcion']
var filas = ['Nombre', 'Fecha', 'Monto', 'Banco', 'Tasa', 'Años']

function presionar(e) {
    e.preventDefault()

    var amortizaciones = document.getElementById('amortizaciones')
    var cuerpo = document.getElementById('tbody')
    //var cuerpoTabla = document.createElement('tbody')
    var pieTabla = document.createElement('tfoot')
    var fila = document.createElement('tr')

    for (let i = 0; i < columnas.length; i++) {
        let celda = document.createElement('th')
        celda.setAttribute('scope', "col")
        celda.innerText = columnas[i]
        amortizaciones.append(celda)
    }

    for (let j = 0; j < filas.length; j++) {
        let fila = document.createElement('tr')
        fila.setAttribute('id', j)
        cuerpo.append(fila)


        let celda = document.createElement('th')
        celda.innerText = filas[j]
        fila.append(celda)

       
        switch (filas[j]) {
            case 'Nombre':
                let contenido = document.createElement('td')
                console.log(contenido)
                contenido.innerText = nombre.value
                fila.append(contenido)
                break
            case 'Fecha':
                let contenido2 = document.createElement('td')
                contenido2.innerText = fecha.value
                fila.append(contenido2)
                break
            case 'Monto':
                let contenido3 = document.createElement('td')
                contenido3.innerText = montoCredito.value
                fila.append(contenido3)
                break
            case 'Banco':
                    let contenido4 = document.createElement('td')
                    contenido4.innerText = bancoNombre
                    fila.append(contenido4)
                    break
            case 'Tasa':
                        let contenido5 = document.createElement('td')
                        contenido5.innerText = tasa
                        fila.append(contenido5)
                        break
                        case 'Años':
                        let contenido6 = document.createElement('td')
                        contenido6.innerText = anios.value
                        fila.append(contenido6)
                        break

        }

        cuerpo.append(fila)


    }










    Datos.push(nombre)
    Datos.push(bancoNombre)
    Datos.push(montoCredito)
    Datos.push(tasa)

    Datos.push(montoConInteres(montoCredito, tasa))
    Datos.push(montoCuota(montoConInteres))




    function montoConInteres(montoCredito, tasa) {
        return montoCreditoTotal = montoCredito + (montoCredito * tasa)
    }

    function montoCuota(montoConInteres) {
        return cuota = montoCreditoTotal / (anios * 12)
    }



    console.log(Datos)















}