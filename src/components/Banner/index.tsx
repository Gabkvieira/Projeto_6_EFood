import * as S from './styles'
import { Menu } from '../../pages/Home'

export type Props = {
  restaurant?: Menu
}

const Banner = ({ restaurant }: Props) => (
  <S.Image style={{ backgroundImage: `url(${restaurant?.capa})` }}>
    <div className="container">
      <div>
        <S.Paragraph>{restaurant?.tipo}</S.Paragraph>
        <S.Title>{restaurant?.titulo}</S.Title>
      </div>
    </div>
  </S.Image>
)

export default Banner
