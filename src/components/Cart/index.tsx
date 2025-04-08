import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem,
  CartItemInfo,
  CartItemTitle,
  CartItemPrice,
  RemoveButton,
  CheckoutButton,
  EmptyCartMessage
} from './styles'

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
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <h2>Carrinho</h2>
        {items.length === 0 ? (
          <EmptyCartMessage>
            O carrinho está vazio. Adicione itens para continuar.
          </EmptyCartMessage>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <CartItemInfo>
                    <CartItemTitle>{item.nome}</CartItemTitle>
                    <CartItemPrice>{formatPrice(item.preco)}</CartItemPrice>
                  </CartItemInfo>
                  <RemoveButton
                    onClick={() => removeItem(item.id)}
                    type="button"
                  >
                    &times;
                  </RemoveButton>
                </CartItem>
              ))}
            </ul>
            <Quantity>{items.length} produto(s) no carrinho</Quantity>
            <Prices>
              Valor total: {formatPrice(getTotalPrice())}
              {/* <span>Entrega grátis</span> */}
            </Prices>
            <CheckoutButton onClick={handleCheckout}>
              Continuar com a entrega
            </CheckoutButton>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
