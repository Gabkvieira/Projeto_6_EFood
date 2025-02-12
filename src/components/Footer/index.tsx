import { Container, FooterSection, Link, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import fundo from '../../assets/images/fundo.png'

const Footer = () => (
  <Container style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <FooterSection>
        <div className="logo">
          <img src={logo} alt="EFood" />
        </div>
      </FooterSection>
      <FooterSection>
        <Links>
          <li>
            <Link>
              <img src={instagram} alt="instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebook} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitter} alt="twitter" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
