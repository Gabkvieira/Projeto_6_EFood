import { Menu } from '../../pages/Home'
import Pratos from '../Pratos'

import { Container, List } from './styles'

export type Props = {
  restaurante: Menu
}

const ListaPratos = ({ restaurante }: Props) => {
  const cardapio = restaurante.cardapio

  return (
    <Container>
      <div className="container">
        <List>
          {cardapio.map((menu) => (
            <li key={menu.id}>
              <Pratos
                id={menu.id}
                descricao={menu.descricao}
                foto={menu.foto}
                nome={menu.nome}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ListaPratos
