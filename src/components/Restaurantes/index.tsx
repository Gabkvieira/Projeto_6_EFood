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
  title: string
  description: string
  infos: string[]
  nota: string[]
  logoEstrela: string
  image: string
}

const Restaurantes = ({
  title,
  description,
  infos,
  image,
  nota,
  logoEstrela
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Nota>{nota}</Nota>
    <LogoEstrela>{logoEstrela}</LogoEstrela>
    <Botao>
      <Link to="/perfil">Saiba mais</Link>
    </Botao>
  </Card>
)

export default Restaurantes
