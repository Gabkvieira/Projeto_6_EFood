import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'

import * as S from './styles'

type DeliveryFormData = {
  receiver: string
  description: string
  city: string
  zipCode: string
  number: string
  complement: string
}

type PaymentFormData = {
  cardName: string
  cardNumber: string
  cardCode: string
  expirationMonth: string
  expirationYear: string
}

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

type OrderData = {
  orderId: string
  status: string
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [currentStep, setCurrentStep] = useState<CheckoutStep>('cart')
  const [isLoading, setIsLoading] = useState(false)
  const [orderData, setOrderData] = useState<OrderData | null>(null)

  const [deliveryForm, setDeliveryForm] = useState<DeliveryFormData>({
    receiver: '',
    description: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })

  const [paymentForm, setPaymentForm] = useState<PaymentFormData>({
    cardName: '',
    cardNumber: '',
    cardCode: '',
    expirationMonth: '',
    expirationYear: ''
  })

  const closeCart = () => {
    dispatch(close())
    setCurrentStep('cart')
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + Number(item.preco)
    }, 0)
  }

  const handleProceedToDelivery = () => {
    setCurrentStep('delivery')
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('payment')
  }

  const handleBackToCart = () => {
    setCurrentStep('cart')
  }

  const handleBackToDelivery = () => {
    setCurrentStep('delivery')
  }

  const handleDeliveryInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setDeliveryForm((prev) => ({ ...prev, [name]: value }))
  }

  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentForm((prev) => ({ ...prev, [name]: value }))
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const payload = {
      products: items.map((item) => ({
        id: item.id,
        price: Number(item.preco)
      })),
      delivery: {
        receiver: deliveryForm.receiver,
        address: {
          description: deliveryForm.description,
          city: deliveryForm.city,
          zipCode: deliveryForm.zipCode,
          number: parseInt(deliveryForm.number, 10),
          complement: deliveryForm.complement
        }
      },
      payment: {
        card: {
          name: paymentForm.cardName,
          number: paymentForm.cardNumber,
          code: parseInt(paymentForm.cardCode, 10),
          expires: {
            month: parseInt(paymentForm.expirationMonth, 10),
            year: parseInt(paymentForm.expirationYear, 10)
          }
        }
      }
    }

    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      const data = await response.json()

      if (response.ok) {
        setOrderData(data)
        dispatch(clear())
        setCurrentStep('confirmation')
      } else {
        alert(
          'Ocorreu um erro ao processar o pedido: ' + data.message ||
            'Erro desconhecido'
        )
      }
    } catch (error) {
      alert('Ocorreu um erro ao processar o pedido')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFinishOrder = () => {
    setCurrentStep('cart')
    closeCart()
  }

  const renderCartContent = () => (
    <>
      <h2>Carrinho</h2>
      {items.length === 0 ? (
        <S.EmptyCartMessage>
          O carrinho está vazio. Adicione itens para continuar.
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
            Valor total:
            <span>{formatPrice(getTotalPrice())}</span>
          </S.Prices>
          <S.CheckoutButton onClick={handleProceedToDelivery}>
            Continuar com a entrega
          </S.CheckoutButton>
        </>
      )}
    </>
  )

  const renderDeliveryForm = () => (
    <>
      <S.Title>Entrega</S.Title>
      <S.Form onSubmit={handleDeliverySubmit}>
        <S.FormGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            id="receiver"
            name="receiver"
            type="text"
            value={deliveryForm.receiver}
            onChange={handleDeliveryInputChange}
            required
          />
        </S.FormGroup>
        <S.FormGroup>
          <label htmlFor="description">Endereço</label>
          <input
            id="description"
            name="description"
            type="text"
            value={deliveryForm.description}
            onChange={handleDeliveryInputChange}
            required
          />
        </S.FormGroup>
        <S.FormGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            name="city"
            type="text"
            value={deliveryForm.city}
            onChange={handleDeliveryInputChange}
            required
          />
        </S.FormGroup>
        <S.InputGroup>
          <S.FormGroup maxWidth="155px">
            <label htmlFor="zipCode">CEP</label>
            <InputMask
              id="zipCode"
              name="zipCode"
              type="text"
              value={deliveryForm.zipCode}
              onChange={handleDeliveryInputChange}
              required
              mask="99999-999"
            />
          </S.FormGroup>
          <S.FormGroup maxWidth="155px">
            <label htmlFor="number">Número</label>
            <input
              id="number"
              name="number"
              type="text"
              value={deliveryForm.number}
              onChange={handleDeliveryInputChange}
              required
            />
          </S.FormGroup>
        </S.InputGroup>
        <S.FormGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            name="complement"
            type="text"
            value={deliveryForm.complement}
            onChange={handleDeliveryInputChange}
          />
        </S.FormGroup>
        <S.ButtonContainer>
          <S.Button type="submit">Continuar com o pagamento </S.Button>
          <S.Button type="button" onClick={handleBackToCart}>
            Voltar para o carrinho
          </S.Button>
        </S.ButtonContainer>
      </S.Form>
    </>
  )

  const renderPaymentForm = () => (
    <>
      <S.Title>
        Pagamento - Valor a pagar: {formatPrice(getTotalPrice())}
      </S.Title>
      <S.Form onSubmit={handlePaymentSubmit}>
        <S.FormGroup>
          <label htmlFor="cardName">Nome no cartão</label>
          <input
            id="cardName"
            name="cardName"
            type="text"
            value={paymentForm.cardName}
            onChange={handlePaymentInputChange}
            required
          />
        </S.FormGroup>
        <S.InputGroup>
          <S.FormGroup maxWidth="228px">
            <label htmlFor="cardNumber">Número do cartão</label>
            <InputMask
              id="cardNumber"
              name="cardNumber"
              type="text"
              value={paymentForm.cardNumber}
              onChange={handlePaymentInputChange}
              required
              mask="9999 9999 9999 9999"
            />
          </S.FormGroup>
          <S.FormGroup maxWidth="87px">
            <label htmlFor="cardCode">CVV</label>
            <InputMask
              id="cardCode"
              name="cardCode"
              type="text"
              value={paymentForm.cardCode}
              onChange={handlePaymentInputChange}
              required
              mask="999"
            />
          </S.FormGroup>
        </S.InputGroup>
        <S.InputGroup>
          <S.FormGroup maxWidth="155px">
            <label htmlFor="expirationMonth">Mês de vencimento</label>
            <InputMask
              id="expirationMonth"
              name="expirationMonth"
              type="text"
              value={paymentForm.expirationMonth}
              onChange={handlePaymentInputChange}
              required
              mask="99"
            />
          </S.FormGroup>
          <S.FormGroup maxWidth="155px">
            <label htmlFor="expirationYear">Ano de vencimento</label>
            <InputMask
              id="expirationYear"
              name="expirationYear"
              type="text"
              value={paymentForm.expirationYear}
              onChange={handlePaymentInputChange}
              required
              mask="99"
            />
          </S.FormGroup>
        </S.InputGroup>
        <S.ButtonContainer>
          <S.Button type="submit" disabled={isLoading}>
            {isLoading ? 'Finalizando pedido...' : 'Finalizar pagamento'}
          </S.Button>
          <S.Button type="button" onClick={handleBackToDelivery}>
            Voltar para a edição de endereço
          </S.Button>
        </S.ButtonContainer>
      </S.Form>
    </>
  )

  const renderConfirmation = () => (
    <>
      <S.Title>Pedido realizado - {orderData?.orderId}</S.Title>
      <div className="order-info">
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </div>
      <S.ButtonContainer>
        <S.Button onClick={handleFinishOrder}>Concluir</S.Button>
      </S.ButtonContainer>
    </>
  )

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {currentStep === 'cart' && renderCartContent()}
        {currentStep === 'delivery' && renderDeliveryForm()}
        {currentStep === 'payment' && renderPaymentForm()}
        {currentStep === 'confirmation' && renderConfirmation()}
      </S.Sidebar>
    </S.CartContainer>
  )
}

const formatPrice = (price: string | number): string => {
  if (!price) return 'R$ 0,00'
  const numPrice = typeof price === 'string' ? parseFloat(price) : price
  return `R$ ${numPrice.toFixed(2).replace('.', ',')}`
}

export default Cart
