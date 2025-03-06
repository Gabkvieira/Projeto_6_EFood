import { Comida } from '../../pages/Home'
import Pratos from '../Pratos'

import { Container, List } from './styles'

export type Props = {
  pratos: Comida[]
}

const ListaPratos = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((comida) => (
          <li key={comida.cardapio.id}>
            <Pratos
              id={comida.cardapio.id}
              descricao={comida.cardapio.descricao}
              foto={comida.cardapio.foto}
              nome={comida.cardapio.nome}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ListaPratos
