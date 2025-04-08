import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container"></div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
