'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import axios from 'axios'

import store from './store'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Admin from './components/Admin'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderHistory from './components/OrderHistory'
import Product from './components/Product'
import User from './components/User'
import OrderConfirmation from './components/OrderConfirmation'

import CartContainer from './containers/CartContainer'
import CatalogContainer from './containers/CatalogContainer'
import ShippingPaymentFormContainer from './containers/ShippingPaymentFormContainer'

import { receiveProducts } from './action-creators/products'
import { receiveReviews } from './action-creators/reviews'
import { receiveUsers } from './action-creators/users'
import { receiveOrders } from './action-creators/orders'
import { receiveCart } from './action-creators/carts'


const get = (url, action) =>
  axios.get(url)
    .then(res => res.data)
    .then(data => store.dispatch(action(data)))

const onAppEnter = () => {
  get('/api/products', receiveProducts)
  get('/api/reviews', receiveReviews)
  get('/api/cart', receiveCart)
}

const App = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <Navbar user={user} />
      {children}
    </div>
  )

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>

        <Route path="cart" component={CartContainer} />
        <Route path="cart/checkout" component={ShippingPaymentFormContainer} />
        <Route path="catalog" component={CatalogContainer}>
          <Route path="/:productId" component={Product} />
        </Route>
        <Route path="user/:userId" component={User}>
          <Route path="/orders" component={OrderHistory} />
        </Route>
        <Route path="admin/:userId" component={Admin} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
