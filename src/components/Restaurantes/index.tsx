import Tag from '../Tag'
import { Link } from 'react-router-dom'

import { Card, Descricao, Titulo, Infos, Botao, Nota } from './styles'

type Props = {
  titulo: string
  descricao: string
  tipo: string
  avaliacao: string[]
  capa: string
}

const Restaurantes = ({ titulo, descricao, tipo, capa, avaliacao }: Props) => (
  <Card>
    <img src={capa} alt={titulo} />
    <Infos>
      <Tag>{tipo}</Tag>
    </Infos>
    <Titulo>{titulo}</Titulo>
    <Descricao>{descricao}</Descricao>
    <Nota>{avaliacao}</Nota>

    <Botao>
      <Link to="/perfil">Saiba mais</Link>
    </Botao>
  </Card>
)

export default Restaurantes
