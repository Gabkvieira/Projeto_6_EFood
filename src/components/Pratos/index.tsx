import Tag from '../Tag'
import { Link } from 'react-router-dom'

import { Card, Descricao, Titulo, Infos, Botao } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const Pratos = ({ title, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>
      <Link to="/">Adicionar ao carrinho</Link>
    </Botao>
  </Card>
)

export default Pratos
