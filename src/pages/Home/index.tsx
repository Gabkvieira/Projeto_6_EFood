import { useEffect, useState } from 'react'

import ListaRestaurantes from '../../components/ListaRestaurantes'
import Hero from '../../components/Hero'

export type Comida = {
  id: number
  titulo: string
  tipo: string
  avaliacao: string[]
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
      <Hero />
      <ListaRestaurantes comidas={restaurantes} />
    </>
  )
}

export default Home
