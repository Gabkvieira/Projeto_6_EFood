import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ListaRestaurantes from '../../components/ListaRestaurantes'

export type Comida = {
  id: number
  titulo: string
  tipo: string[]
  avaliacao: string[]
  logoEstrela: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: string
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Comida[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Banner />
      <ListaRestaurantes comidas={restaurantes} />
    </>
  )
}

export default Home
