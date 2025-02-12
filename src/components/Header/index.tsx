import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <div>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/">
              <p>Restaurantes</p>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">
              <img src={logo} alt="EFood" />
            </Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      <p>0 produto(s) no carrinho</p>
    </LinkCart>
  </HeaderBar>
)

export default Header
