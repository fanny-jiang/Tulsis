'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import axios from 'axios'

import store from './store'
import NotFound from './components/NotFound'
import Catalog from './components/Catalog'
import Navbar from './components/Navbar'
import Admin from './components/Admin'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderHistory from './components/OrderHistory'
import Product from './components/Product'
import User from './components/User'

import {receiveProducts} from './action-creators/products'
import {receiveReviews} from './action-creators/reviews'
import {receiveUsers} from './action-creators/users'
import {receiveOrders} from './action-creators/orders'

const onAppEnter = () => {
  const pProducts = axios.get('/api/products')
  const pReviews = axios.get('/api/reviews')
  const pUsers = axios.get('api/users')
  const pOrders = axios.get('api/orders')
  // Maybe add something for orderItems

  return Promise
  .all([pProducts, pReviews, pUsers, pOrders])
  .then(res => res.map(r => r.data))
  .then(([products, reviews, users, orders]) => {
    store.dispatch(receiveProducts(products))
    store.dispatch(receiveReviews(reviews))
    // store.dispatch(receiveUsers(users))
    // store.dispatch(receiveOrders(orders))
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
        <Route path="catalog" component={Catalog}>
          <Route path="/:productId" component={Product} />
        </Route>
        <Route path="cart" component={Cart}>
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
