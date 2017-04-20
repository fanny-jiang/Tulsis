'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderItem = db.model('orderItems')
const Product = db.model('products')
const User = db.model('users') // for orders by a user
const { mustBeLoggedIn, forbidden, selfOnly } = require('./auth.filters')

module.exports = require('express').Router()

  // GET / sends back the cart, which is an instance of Order
  .get('/',
  (req, res, next) =>
    res.send(req.cart)
  )

  // POST /:productId adds a new item to the cart
  // We assume that req.body will include item quantity
  // NOTE: this is untested -- don't know how to test this in Postman
  .post('/:productId',
  (req, res, next) => {
    Product.findById(req.params.productId)
    .then(product => req.cart.addProduct(product))
    .then((cart) => {
      OrderItem.update(
        { quantity: req.body.quantity },
        { where: { order_id: cart.id } },
        { returning: true })
    })
    .then(orderItem => res.send({
      message: 'Item successfully added to cart',
      item: orderItem[1][0]
    }))
    .catch(next)
  })

  // DELETE /:productId deletes* an item from our cart
  // NOTE: if this doesn't work well, we change item quantity to 0 instead
  .delete('/:productId',
  (req, res, next) => {
    req.cart.destroy(
      { model: OrderItem },
      { where: { product_id: req.params.productId } })
      .catch(next)
  })

  // PUT /:productId changes the quantity of an item in cart
  .put('/:productId',
  (req, res, next) => {
    req.cart.update(
      { quantity: req.body.quantity },
      { model: OrderItem },
      { where: { product_id: req.params.productId } },
      { returning: true })
    .then(orderItem => res.send({
      message: 'Modified quantity',
      item: orderItem[1][0]
    }))
    .catch(next)
  })
