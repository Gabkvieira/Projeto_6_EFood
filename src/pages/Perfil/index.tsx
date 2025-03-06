import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'
import { Comida } from '../Home'
import Header from '../../components/Header'

const Perfil = () => {
  const [pratos, setPratos] = useState<Comida[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <ListaPratos pratos={pratos} />
    </>
  )
}

export default Perfil
