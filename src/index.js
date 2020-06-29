import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'

import Index from './containers/Index'
import Product from './containers/Product'
import AllProducts from './containers/AllProducts'

import './styles/main.scss'

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Index} />
    <Route exact path="/produto" component={Product} />
    <Route exact path="/produtos" component={AllProducts} />
  </BrowserRouter>,
  document.getElementById('root')
)
