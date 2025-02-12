import { Imagem, Paragrafo, Titulo } from './styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Paragrafo>Italiana</Paragrafo>
      <div>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
