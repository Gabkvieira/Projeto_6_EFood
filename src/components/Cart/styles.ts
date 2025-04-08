import styled from 'styled-components'
import { cores } from '../../styles'

import closeIcon from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  h2 {
    color: ${cores.beje};
    margin-left: 115px;
  }
`

export const CheckoutButton = styled.button`
  max-width: 100%;
  width: 100%;
`

export const EmptyCartMessage = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.beje};
  text-align: center;
  margin-top: 50px;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.beje};
  margin-bottom: 24px;
`

export const CartItemPrice = styled.span`
  display: block;
  font-size: 12px;
  color: ${cores.cinzaClaro};
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.beje};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;
  position: relative;
  background-color: ${cores.beje};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
`

export const CartItemInfo = styled.span`
  display: block;
  color: ${cores.branca};
  font-weight: bold;
  font-size: 14px;
`

export const CartItemTitle = styled.h3`
  color: ${cores.branca};
  font-weight: bold;
  font-size: 16px;
`

export const RemoveButton = styled.button`
  background-image: url(${closeIcon});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: 0;
`
