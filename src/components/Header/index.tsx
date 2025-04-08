import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
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
            <LinkItem onClick={openCart}>
              <p>{items.length} produto(s) no carrinho</p>
            </LinkItem>
          </Links>
        </nav>
      </div>
    </HeaderBar>
  )
}
export default Header
