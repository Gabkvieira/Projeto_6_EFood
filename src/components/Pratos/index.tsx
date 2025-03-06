import { Link } from 'react-router-dom'

import { Card, Descricao, Titulo, Botao } from './styles'

type Props = {
  foto: string
  id: number
  nome: string
  descricao: string
}

const Pratos = ({ foto, id, nome, descricao }: Props) => (
  <Card>
    <img src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{descricao}</Descricao>
    <Botao>
      <Link to={`/product/${id}`}>Mais detalhes</Link>
    </Botao>
  </Card>
)

export default Pratos
