import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'

import { useEffect, useState } from 'react'
import { Comida } from '../Home'

const Product = () => {
  const { id } = useParams()

  const [comida, setComida] = useState<Comida>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setComida(res))
  }, [id])

  if (!comida) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero />
    </>
  )
}

export default Product
