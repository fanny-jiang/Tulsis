'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import axios from 'axios'

import store from './store'
import NotFound from './components/NotFound'
import CatalogContainer from './containers/CatalogContainer'
import Navbar from './components/Navbar'
import Admin from './components/Admin'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderHistory from './components/OrderHistory'
import Product from './components/Product'
import User from './components/User'

import { receiveProducts } from './action-creators/products'
import { receiveReviews } from './action-creators/reviews'
import { receiveUsers } from './action-creators/users'
import { receiveOrders } from './action-creators/orders'
import { receiveCart } from './action-creators/carts'

const onAppEnter = () => {
  const pProducts = axios.get('/api/products')
  const pReviews = axios.get('/api/reviews')
  const pUsers = axios.get('api/users')
  const pOrders = axios.get('api/orders')
  // Maybe add something for orderItems
  // console.log('from onAppEnter', pProducts)

  return Promise
    .all([pProducts, pReviews, pUsers, pOrders])
    .then(res => {
      return res.map(r => r.data)
    })
    .then((res) => {
      const products = res[0]
      const reviews = res[1]
      const users = res[2]
      store.dispatch(receiveProducts(products))
      store.dispatch(receiveReviews(reviews))
      store.dispatch(receiveUsers(users))
      // store.dispatch(receiveOrders(orders))
    })
}

const onUserLogin = () => {
  const pCart = axios.get('/api/cart')
    .then(res => {
      const cart = res
      store.dispatch(receiveCart(cart))
    })
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
        <Route path="catalog" component={CatalogContainer}>
          <Route path="/:productId" component={Product} />
        </Route>
        <Route path="cart" component={Cart} onUserLogin={onUserLogin}>
          <Route path="/checkout" component={Checkout} />
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