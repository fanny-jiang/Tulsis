// 'use strict'
// import React from 'react'
// import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
// import { render } from 'react-dom'
// import { connect, Provider } from 'react-redux'
// import axios from 'axios'

// import store from './store'
// import App from './components/App'
// import Login from './components/Login'
// import WhoAmI from './components/WhoAmI'
// import NotFound from './components/NotFound'
// import Catalog from './components/Catalog'

// import { receiveProducts } from './action-creators/products'
// import { receiveReviews } from './action-creators/reviews'
// import { receiveUsers } from './action-creators/users'
// import { receiveOrders } from './action-creators/orders'


// const onAppEnter = () => {
//   // console.log('receiveProducts: ', typeof receiveProducts)
//   // console.log('receiveUsers: ', typeof receiveUsers)
//   const pProducts = axios.get('/api/products')
//   const pReviews = axios.get('/api/reviews')
//   const pUsers = axios.get('api/users')
//   const pOrders = axios.get('api/orders')
//   const pCart = axios.get('api/cart')
//   // Maybe add something for orderItems

//   return Promise
//     .all([pProducts, pReviews, pUsers, pOrders])
//     .then(res => res.map(r => r.data))
//     .then(([products, reviews, users, orders]) => {
//       store.dispatch(receiveProducts(products))
//       store.dispatch(receiveReviews(reviews))
//       store.dispatch
//       // store.dispatch(receiveUsers(users))
//       // store.dispatch(receiveOrders(orders))
//     })
// }

// export default function Root() {
//   return (
//     <Provider store={store}>
//       <Router history={browserHistory}>
//         <Route path="/" component={App} onEnter={onAppEnter}>
//           <Route path="catalog" component={Catalog} />
//         </Route>
//         <Route path='*' component={NotFound} />
//       </Router>
//     </Provider> ,
//     document.getElementById('main')
//   )
// }
