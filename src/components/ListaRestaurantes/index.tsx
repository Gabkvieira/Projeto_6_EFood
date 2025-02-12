import Game from '../../models/Comida'
import Restaurantes from '../Restaurantes'

import { Container, List } from './styles'

export type Props = {
  comidas: Game[]
}

const ListaRestaurantes = ({ comidas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {comidas.map((comida) => (
          <Restaurantes
            key={comida.id}
            description={comida.description}
            image={comida.image}
            infos={comida.infos}
            nota={comida.nota}
            logoEstrela={comida.logoEstrela}
            title={comida.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaRestaurantes
