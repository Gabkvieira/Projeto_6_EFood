import { Menu } from '../../pages/Home'
import Dishes from '../Dishes'

import * as S from './styles'

export type Props = {
  restaurant: Menu
}

const DishesList = ({ restaurant }: Props) => {
  const restaurantMenu = restaurant.cardapio

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurantMenu.map((menu) => (
            <li key={menu.id}>
              <Dishes
                id={menu.id}
                descricao={menu.descricao}
                foto={menu.foto}
                nome={menu.nome}
                porcao={menu.porcao}
                preco={menu.preco}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default DishesList
