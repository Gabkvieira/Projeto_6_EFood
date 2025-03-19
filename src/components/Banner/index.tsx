import { Imagem, Paragrafo, Titulo } from './styles'
import { Menu } from '../../pages/Home'

export type Props = {
  restaurante?: Menu
}

const Banner = ({ restaurante }: Props) => (
  <Imagem style={{ backgroundImage: `url(${restaurante?.capa})` }}>
    <div className="container">
      <div>
        <Paragrafo>{restaurante?.tipo}</Paragrafo>
        <Titulo>{restaurante?.titulo}</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
