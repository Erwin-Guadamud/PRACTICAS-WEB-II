"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
// crear una función que reciba el arreglo del punto anterior y un id
// y proceder a eliminar el elemento del arreglo
let detallesConsultaData = data_1.detallesConsulta; // Estado actual de los datos
let tempDetallesConsulta = data_1.detallesConsulta; // Estado anterior de los datos
function eliminarElemento(detallesArr, id) {
    tempDetallesConsulta = detallesArr; // Copia que guarda el estado anterior de los datos
    detallesConsultaData = detallesArr.filter(detalleConsulta => detalleConsulta.id !== id);
    // console.log('Estado anterior de los datos:', tempDetallesConsulta)
    // console.log('Estado actual de los datos:', detallesConsultaData)
}
eliminarElemento(detallesConsultaData, 5);
eliminarElemento(detallesConsultaData, 4);
// agregar a la funcion anterior un callback que le permita acceder por última vez
// a los datos del elemento eliminado y mostrarlo por consola
function eliminarElementoV2(detallesArr, id, // id del elemento a eliminar
callback) {
    tempDetallesConsulta = detallesArr; // Copia que guarda el estado anterior de los datos
    const elementoEliminado = detallesArr.find(detalleConsulta => detalleConsulta.id === id);
    detallesConsultaData = detallesArr.filter(detalleConsulta => detalleConsulta.id !== id);
    if (elementoEliminado)
        callback(elementoEliminado);
    else
        console.log(`El elemento con id ${id} no fue encontrado`);
}
eliminarElementoV2(detallesConsultaData, 3, (detalleConsulta) => {
    console.log('Elemento eliminado:', detalleConsulta);
});
// buscar un servicio REST de acceso libre en el internet distinto al utilizado en clases,
// tipar la respuesta aplicando una interfaz y aplicar Fetch para consultar los datos
// y validar que la respuesta cumpla con la interfaz
const REST_API_URL = 'https://swapi.dev/api/people/1/';
async function obtenerDatos() {
    const response = await fetch(REST_API_URL);
    return (await response.json());
}
obtenerDatos().then((data) => console.log('Datos obtenidos:', data));
