import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'
import Comida from '../../models/Comida'

import pizza from '../../assets/images/pizza.png'
import Header from '../../components/Header'

const pratos: Comida[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    nota: [],
    logoEstrela: '',
    image: pizza
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    nota: [],
    logoEstrela: '',
    image: pizza
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    nota: [],
    logoEstrela: '',
    image: pizza
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    nota: [],
    logoEstrela: '',
    image: pizza
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    nota: [],
    logoEstrela: '',
    image: pizza
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    nota: [],
    logoEstrela: '',
    image: pizza
  }
]

const Categories = () => (
  <>
    <Header />
    <Banner />
    <ListaPratos pratos={pratos} />
  </>
)

export default Categories
