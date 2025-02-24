import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem } from './styles'

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
          <LinkItem>
            <Link to="/">
              <p>0 produto(s) no carrinho</p>
            </Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
  </HeaderBar>
)

export default Header
