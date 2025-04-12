import { Imagem, Logo, Titulo } from './styles'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Logo src={logo} alt="EFood" />
      <Titulo>
        <p>Viva experiências gastronômicas</p>
        <p>no conforto da sua casa</p>
      </Titulo>
    </div>
  </Imagem>
)

export default Hero
