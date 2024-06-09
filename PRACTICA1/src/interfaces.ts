export interface Paciente {
  id: number
  nombre: string
  identificacion: string
}

export interface SignoVital {
  id: number
  descripcion: string
  nivelMinimo: number
  nivelMaximo: number
}

export interface ControlRealizado {
  id: number
  idPaciente: number
  idSignoVital: number
  fecha: string
  hora: string
  valor: number
}

export interface DetallesConsulta extends Paciente {
  signosVitales: SignoVital[]
  controlesRealizados: ControlRealizado[]
}

export interface StarWarsCharacter {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}
