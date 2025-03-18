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
          <li key={comida.id}>
            <Restaurantes
              id={comida.id}
              descricao={comida.descricao}
              capa={comida.capa}
              tipo={comida.tipo}
              avaliacao={comida.avaliacao}
              titulo={comida.titulo}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ListaRestaurantes
