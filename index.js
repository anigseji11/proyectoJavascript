

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

let datos = fetch("./datos.json")
    .then(response => response.json())
    .then(info => {
        const bancos = info.datos

        bancos.forEach(banco => {

            const option = document.createElement("option")
            option.innerText = `${banco.nombre}`
            option.setAttribute('value', `${banco.tasa}`)
            selectTag.append(option)

        });




    })

function Cambio(e) {
    bancoNombre = e.target.selectedOptions[0].innerText
    tasa = e.target.value


}

var columnas = ['#', 'Descripcion']
var filas = ['Nombre', 'Fecha', 'Monto', 'Banco', 'Tasa', 'Años']








function presionar(e) {
    e.preventDefault()

    Swal.fire({
        title: '<strong>Datos de Simulacion</u></strong>',
        icon: 'success',
        html:
            '<div class="card">' +
            '<div class="card-header"></div>' +
            '<div class="card-body">' +
            '<table class="table">' +
            '<thead>' +
            '<tr id="amortizaciones2">' +

            '</tr>' +
            '</thead>' +

            '<tbody id="tbody2">' +

            '</tbody>' +
            '</table>' +
            '</div>' +
            '</div>',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Enviar simulacion!',
    })


    var amortizaciones2 = document.getElementById('amortizaciones2')
    var cuerpo = document.getElementById('tbody2')
    //var cuerpoTabla = document.createElement('tbody')
    var pieTabla = document.createElement('tfoot')
    var fila = document.createElement('tr')

    for (let i = 0; i < columnas.length; i++) {
        let celda = document.createElement('th')
        celda.setAttribute('scope', "col")
        celda.innerText = columnas[i]
        amortizaciones2.append(celda)
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




    function montoConInteres(montoCredito, tasa) {
        return montoCreditoTotal = montoCredito + (montoCredito * tasa)
    }

    function montoCuota(montoConInteres) {
        return cuota = montoCreditoTotal / (anios * 12)
    }
















}