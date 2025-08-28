import { useEffect, useState } from 'react'

import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'

export type Menu = {
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
  }[]
}

const Home = () => {
  const [restaurant, setRestaurant] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantsList restaurantMenu={restaurant} />
    </>
  )
}

export default Home
