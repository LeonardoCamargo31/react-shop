import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Index from './containers/Index'
import Product from './containers/Product'
import AllProducts from './containers/AllProducts'
import Checkout from './containers/Checkout'

import './styles/main.scss'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Index} />
      <Route exact path="/produto/:productId" component={Product} />
      <Route exact path="/produtos" component={AllProducts} />
      <Route exact path="/checkout" component={Checkout} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
