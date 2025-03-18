import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'
import { Comida } from '../Home'
import Header from '../../components/Header'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Comida>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/`)
      .then((res) => res.json())
      .then((res) =>
        setRestaurante(res.filter((item: Comida) => item.id === Number(id))[0])
      )
  }, [id])

  return (
    <>
      <Header />
      <Banner />
      <ListaPratos restaurantes={restaurante} />
    </>
  )
}

export default Perfil
