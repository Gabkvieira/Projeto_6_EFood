import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Menu } from '../Home'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import Header from '../../components/Header'

const Perfil = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Menu>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) =>
        setRestaurant(res.filter((item: Menu) => item.id === Number(id))[0])
      )
  }, [id])

  if (!restaurant) return <></>
  return (
    <>
      <Header />
      <Banner restaurants={restaurant} />
      <DishesList restaurants={restaurant} />
    </>
  )
}

export default Perfil
