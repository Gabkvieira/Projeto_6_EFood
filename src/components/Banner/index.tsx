import * as S from './styles'
import { Menu } from '../../pages/Home'

export type Props = {
  restaurants?: Menu
}

const Banner = ({ restaurants }: Props) => (
  <S.Image style={{ backgroundImage: `url(${restaurants?.capa})` }}>
    <div className="container">
      <div>
        <S.Paragraph>{restaurants?.tipo}</S.Paragraph>
        <S.Title>{restaurants?.titulo}</S.Title>
      </div>
    </div>
  </S.Image>
)

export default Banner
