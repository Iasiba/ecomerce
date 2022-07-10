import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/index.js';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
      <Provider store={store}>
    <App />
  </Provider>
  </HashRouter>

)
