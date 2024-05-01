import { DetallesConsulta, StarWarsCharacter } from './interfaces'
import { detallesConsulta } from './data'

// crear una función que reciba el arreglo del punto anterior y un id
// y proceder a eliminar el elemento del arreglo

let detallesConsultaData: DetallesConsulta[] = detallesConsulta // Estado actual de los datos
let tempDetallesConsulta: DetallesConsulta[] = detallesConsulta // Estado anterior de los datos

function eliminarElemento(detallesArr: DetallesConsulta[], id: number) {
  tempDetallesConsulta = detallesArr // Copia que guarda el estado anterior de los datos
  detallesConsultaData = detallesArr.filter(detalleConsulta => detalleConsulta.id !== id)

  // console.log('Estado anterior de los datos:', tempDetallesConsulta)
  // console.log('Estado actual de los datos:', detallesConsultaData)
}

eliminarElemento(detallesConsultaData, 5)
eliminarElemento(detallesConsultaData, 4)

// agregar a la funcion anterior un callback que le permita acceder por última vez
// a los datos del elemento eliminado y mostrarlo por consola

function eliminarElementoV2(
  detallesArr: DetallesConsulta[],
  id: number, // id del elemento a eliminar
  callback: (data: DetallesConsulta) => void
) {
  tempDetallesConsulta = detallesArr // Copia que guarda el estado anterior de los datos
  const elementoEliminado = detallesArr.find(detalleConsulta => detalleConsulta.id === id)
  detallesConsultaData = detallesArr.filter(detalleConsulta => detalleConsulta.id !== id)

  if (elementoEliminado) callback(elementoEliminado)
  else console.log(`El elemento con id ${id} no fue encontrado`)
}

eliminarElementoV2(detallesConsultaData, 3, (detalleConsulta: DetallesConsulta) => {
  console.log('Elemento eliminado:', detalleConsulta)
})

// buscar un servicio REST de acceso libre en el internet distinto al utilizado en clases,
// tipar la respuesta aplicando una interfaz y aplicar Fetch para consultar los datos
// y validar que la respuesta cumpla con la interfaz

const REST_API_URL = 'https://swapi.dev/api/people/1/'

async function obtenerDatos(): Promise<StarWarsCharacter> {
  const response = await fetch(REST_API_URL)
  return (await response.json()) as StarWarsCharacter
}

obtenerDatos().then((data: StarWarsCharacter) => console.log('Datos obtenidos:', data))
