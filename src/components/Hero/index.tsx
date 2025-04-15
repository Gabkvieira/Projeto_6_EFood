import * as S from './styles'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <S.Image style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <S.Logo src={logo} alt="EFood" />
      <S.Title>
        <p>Viva experiências gastronômicas</p>
        <p>no conforto da sua casa</p>
      </S.Title>
    </div>
  </S.Image>
)

export default Hero
