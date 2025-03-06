import Tag from '../Tag'
import { Link } from 'react-router-dom'

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
  tipo: string[]
  avaliacao: string[]
  logoEstrela: string
  capa: string
}

const Restaurantes = ({
  titulo,
  descricao,
  tipo,
  capa,
  avaliacao,
  logoEstrela
}: Props) => (
  <Card>
    <img src={capa} alt={titulo} />
    <Infos>
      {tipo.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{titulo}</Titulo>
    <Descricao>{descricao}</Descricao>
    <Nota>{avaliacao}</Nota>
    <LogoEstrela>
      <img src={logoEstrela} alt="estrela" />
    </LogoEstrela>
    <Botao>
      <Link to="/perfil">Saiba mais</Link>
    </Botao>
  </Card>
)

export default Restaurantes
