import styled from 'styled-components'
import { colors } from '../../styles'
import closeIcon from '../../assets/images/lixeira.png'

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
  z-index: 1000;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;

  @media only screen and (max-width: 767px) {
    width: 80%;
  }

  h2 {
    color: ${colors.beige};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    text-align: center;
  }
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${colors.beige};
  margin-bottom: 24px;
  margin-top: 40px;
  display: flex;

  span {
    position: absolute;
    right: 8px;
  }
`
export const CartItem = styled.li`
  background-color: ${colors.beige};
  display: flex;
  border-bottom: 1px solid ${colors.beige};
  position: relative;
  margin-bottom: 16px;
  height: 100px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-top: 8px;
    margin-right: 8px;
    margin-left: 8px;
  }
`

export const CartItemInfo = styled.div`
  flex: 1;
`

export const CartItemTitle = styled.h3`
  color: ${colors.salmon};
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 16px;
  margin-top: 8px;
`

export const CartItemPrice = styled.span`
  display: block;
  color: ${colors.salmon};
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 8px;
`

export const RemoveButton = styled.button`
  background-image: url(${closeIcon});
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  right: 8px;
`

export const CheckoutButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.salmon};
  border: none;
  font-size: 14px;
  font-weight: 700;
  width: 344px;
  cursor: pointer;
  height: 24px;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
`

export const EmptyCartMessage = styled.p`
  color: ${colors.beige};
  font-size: 16px;
  text-align: center;
  margin: 32px 0;
`
