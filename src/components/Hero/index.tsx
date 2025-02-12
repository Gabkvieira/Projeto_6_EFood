import { Imagem, Titulo } from './styles'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <img src={logo} alt="EFood" />
      <div>
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Hero
