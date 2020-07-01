import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'

import Index from './containers/Index'
import Product from './containers/Product'
import AllProducts from './containers/AllProducts'
import Checkout from './containers/Checkout'

import './styles/main.scss'

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Index} />
    <Route exact path="/produto/:productId" component={Product} />
    <Route exact path="/produtos" component={AllProducts} />
    <Route exact path="/checkout" component={Checkout} />
  </BrowserRouter>,
  document.getElementById('root')
)
