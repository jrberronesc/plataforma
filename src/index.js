// NATIVO
import React from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import App from './components/App'

// CSS
import './styles/styles.scss' 

//IMPORTACIONES ALEATORIAS
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
