import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import fundo from '../../assets/images/fundo.png'

const Footer = () => (
  <S.Container style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <S.FooterSection>
        <div className="logo">
          <img src={logo} alt="EFood" />
        </div>
      </S.FooterSection>
      <S.FooterSection>
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
      </S.FooterSection>
      <div className="footer=text">
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega
        <p> e qualidade dos produtos é toda do estabelecimento contratado.</p>
      </div>
    </div>
  </S.Container>
)

export default Footer
