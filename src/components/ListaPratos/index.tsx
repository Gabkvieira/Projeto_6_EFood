import Comida from '../../models/Comida'
import Pratos from '../Pratos'

import { Container, List } from './styles'

export type Props = {
  pratos: Comida[]
}

const ListaRestaurantes = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((comida) => (
          <Pratos
            key={comida.id}
            description={comida.description}
            image={comida.image}
            infos={comida.infos}
            title={comida.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaRestaurantes
