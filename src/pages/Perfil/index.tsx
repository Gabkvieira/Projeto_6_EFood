import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'
import { Menu } from '../Home'
import Header from '../../components/Header'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Menu>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) =>
        setRestaurante(res.filter((item: Menu) => item.id === Number(id))[0])
      )
  }, [id])

  if (!restaurante) return <></>
  return (
    <>
      <Header />
      <Banner restaurante={restaurante} />
      <ListaPratos restaurante={restaurante} />
    </>
  )
}

export default Perfil
