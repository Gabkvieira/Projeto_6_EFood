// import { Imagem, Paragrafo, Titulo } from './styles'
// import { Comida } from '../../pages/Home'

// export type Props = {
//   comidas: Comida[]
// }

// const Banner = ({ comidas }: Props) => (
//   <Imagem style={{ backgroundImage: `url(${comida.capa})` }}>
//     <div className="container">
//       <div>
//       {comidas.map((comida) => (
//           <Paragrafo tipo={comida.tipo}/>
//           <Titulo titulo={comida.titulo}/>
//         ))}
//       </div>
//     </div>
//   </Imagem>
// )

// export default Banner

import { Imagem, Paragrafo, Titulo } from './styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Paragrafo>Italiana</Paragrafo>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
