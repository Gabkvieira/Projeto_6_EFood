import { Link } from 'react-router-dom'

import Tag from '../Tag'
import star from '../../assets/images/estrela.png'
import * as S from './styles'

type Props = {
  restaurantName: string
  description: string
  type: string
  rating: string[]
  cover: string
  id: number
}

const Restaurants = ({
  restaurantName,
  description,
  type,
  cover,
  rating,
  id
}: Props) => (
  <S.Card>
    <img src={cover} alt={restaurantName} />
    <S.Info>
      <Tag>{type}</Tag>
    </S.Info>
    <S.Title>{restaurantName}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Rating>{rating}</S.Rating>
    <S.StarLogo>
      <img src={star} alt="star" />
    </S.StarLogo>
    <S.Button>
      <Link to={`/restaurante/${id}`}>Saiba mais</Link>
    </S.Button>
  </S.Card>
)

export default Restaurants
