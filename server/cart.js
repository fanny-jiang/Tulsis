'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderItem = db.model('orderItems')
const Product = db.model('products')
const User = db.model('users') // for orders by a user
const { mustBeLoggedIn, forbidden, selfOnly } = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
  (req, res, next) =>
    res.send(req.cart)
  )
  .post('/:productId',
  (req, res, next) => {
    const product = Product.findById(req.params.productId)
    req.cart.addProduct(product)
    res.json(req.cart)
  })

