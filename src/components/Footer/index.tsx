import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import background from '../../assets/images/fundo.png'

const Footer = () => (
  <S.Container style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="EFood" />
        </Link>
      </div>
      <S.Links>
        <li>
          <S.Link>
            <img src={instagram} alt="instagram" />
          </S.Link>
        </li>
        <li>
          <S.Link>
            <img src={facebook} alt="facebook" />
          </S.Link>
        </li>
        <li>
          <S.Link>
            <img src={twitter} alt="twitter" />
          </S.Link>
        </li>
      </S.Links>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega
      <p> e qualidade dos produtos é toda do estabelecimento contratado.</p>
    </div>
  </S.Container>
)

export default Footer
