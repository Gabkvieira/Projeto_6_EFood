import { Menu } from '../../pages/Home'
import Restaurants from '../Restaurants'

import * as S from './styles'

export type Props = {
  restaurantMenu: Menu[]
}

const RestaurantsList = ({ restaurantMenu }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {restaurantMenu.map((menu) => (
          <li key={menu.id}>
            <Restaurants
              id={menu.id}
              description={menu.descricao}
              cover={menu.capa}
              type={menu.tipo}
              rating={menu.avaliacao}
              restaurantName={menu.titulo}
            />
          </li>
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default RestaurantsList
