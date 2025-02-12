class Comida {
  description: string
  image: string
  logoEstrela: string
  infos: string[]
  nota: string[]
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    logoEstrela: string,
    infos: string[],
    nota: string[],
    title: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.logoEstrela = logoEstrela
    this.infos = infos
    this.nota = nota
    this.title = title
  }
}

export default Comida
