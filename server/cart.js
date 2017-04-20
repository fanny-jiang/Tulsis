'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderItem = db.model('orderItems')
const User = db.model('users') // for orders by a user
const { mustBeLoggedIn, forbidden, selfOnly } = require('./auth.filters')

module.exports = require('express').Router()
//   .get('/',
//   (req, res, next) => 
//     Order.find({
//       where: {status : 'Pending',
//               userId: re}
//     })
