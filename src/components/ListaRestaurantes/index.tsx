import { Menu } from '../../pages/Home'
import Restaurantes from '../Restaurantes'

import { Container, List } from './styles'

export type Props = {
  menus: Menu[]
}

const ListaRestaurantes = ({ menus }: Props) => (
  <Container>
    <div className="container">
      <List>
        {menus.map((menu) => (
          <li key={menu.id}>
            <Restaurantes
              id={menu.id}
              descricao={menu.descricao}
              capa={menu.capa}
              tipo={menu.tipo}
              avaliacao={menu.avaliacao}
              titulo={menu.titulo}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ListaRestaurantes
