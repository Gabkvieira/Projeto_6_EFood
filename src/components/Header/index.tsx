import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/fundo.png'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <nav>
          <S.Links>
            <S.LinkItem>
              <Link to="/">
                <p>Restaurantes</p>
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <Link to="/">
                <img src={logo} alt="EFood" />
              </Link>
            </S.LinkItem>
            <S.LinkItem onClick={openCart}>
              <p>{items.length} produto(s) no carrinho</p>
            </S.LinkItem>
          </S.Links>
        </nav>
      </div>
    </S.HeaderBar>
  )
}
export default Header
