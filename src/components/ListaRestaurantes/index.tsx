import { Comida } from '../../pages/Home'
import Restaurantes from '../Restaurantes'

import { Container, List } from './styles'

export type Props = {
  comidas: Comida[]
}

const ListaRestaurantes = ({ comidas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {comidas.map((comida) => (
          <Restaurantes
            key={comida.id}
            descricao={comida.descricao}
            capa={comida.capa}
            tipo={comida.tipo}
            avaliacao={comida.avaliacao}
            logoEstrela={comida.logoEstrela}
            titulo={comida.titulo}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaRestaurantes
