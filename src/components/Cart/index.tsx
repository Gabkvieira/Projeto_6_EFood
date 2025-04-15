import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + Number(item.preco)
    }, 0)
  }

  const handleCheckout = () => {
    alert('Pedido realizado com sucesso!')
    dispatch(clear())
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <h2>Carrinho</h2>
        {items.length === 0 ? (
          <S.EmptyCartMessage>
            <p>O carrinho está vazio.</p>
            <p>Adicione itens para continuar.</p>
          </S.EmptyCartMessage>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <S.CartItemInfo>
                    <S.CartItemTitle>{item.nome}</S.CartItemTitle>
                    <S.CartItemPrice>{formatPrice(item.preco)}</S.CartItemPrice>
                  </S.CartItemInfo>
                  <S.RemoveButton
                    onClick={() => removeItem(item.id)}
                    type="button"
                  ></S.RemoveButton>
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              Valor total <span>{formatPrice(getTotalPrice())}</span>
            </S.Prices>
            <S.CheckoutButton onClick={handleCheckout}>
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
