import Tag from '../Tag'
import { Link } from 'react-router-dom'
import estrela from '../../assets/images/estrela.png'

import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Botao,
  Nota,
  LogoEstrela
} from './styles'

type Props = {
  titulo: string
  descricao: string
  tipo: string
  avaliacao: string[]
  capa: string
  id: number
}

const Restaurantes = ({
  titulo,
  descricao,
  tipo,
  capa,
  avaliacao,
  id
}: Props) => (
  <Card>
    <img src={capa} alt={titulo} />
    <Infos>
      <Tag>{tipo}</Tag>
    </Infos>
    <Titulo>{titulo}</Titulo>
    <Descricao>{descricao}</Descricao>
    <Nota>{avaliacao}</Nota>
    <LogoEstrela>
      <img src={estrela} alt="estrela" />
    </LogoEstrela>
    <Botao>
      <Link to={`/restaurante/${id}`}>Saiba mais</Link>
    </Botao>
  </Card>
)

export default Restaurantes
