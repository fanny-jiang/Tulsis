'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderItem = db.model('orderItems')
const Product = db.model('products')
const User = db.model('users') // for orders by a user
const { mustBeLoggedIn, forbidden, selfOnly } = require('./auth.filters')

module.exports = require('express').Router()
  .use(loadCart)
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
      .then(product => {
        req.cart.addProduct(product,
          { quantity: req.body.quantity })
        return req.cart
      })
      .then(order => res.send(order))
      .catch(next)
  })

  // DELETE /:productId deletes* an item from our cart
  .delete('/:productId',
  (req, res, next) => {
    OrderItem.destroy(
      {
        where: {
          product_id: req.params.productId,
          order_id: req.cart.id
        }
      })
      .then(() => next())
      .catch(next)
  },
  loadCart,
  (req, res, next) => {
    res.send({
      message: 'Item deleted',
      cart: req.cart
    })
  })



  // increments quantity of item by 1 (for '+' button in cart view)
  .put('/:productId/add',
  (req, res, next) => {
    OrderItem.findOne({
      where: { product_id: +req.params.productId },
      include: [{ model: Product }]
    })
      .then(item => {
        const productInventory = item.product.dataValues.quantity
        if (item.quantity >= productInventory) {
          return res.status(400).send('Out of stock')
        }
        return item.update(
          { quantity: item.quantity + 1 },
          { returning: true })
        //  Eventually move this update to the checkout portion
        // .then(item => {
        //   Product.update({quantity: productInventory - 1}, {where: {id: req.params.productId}})
        // })
      })
      .then(() => next())
      .catch(next)
  },
  loadCart, // reload it because it just changed
  (req, res, next) => {
    res.send({
      message: 'Quantity increased by 1',
      cart: req.cart
    })
  })

  // decrements quantity of item by 1 (for '-' button in cart view)
  .put('/:productId/subtract',
  (req, res, next) => {
    OrderItem.findOne({
      where: { product_id: +req.params.productId }
    })
      .then(item => {
        if (item.quantity < 1) {
          return res.status(400).send('Please add item to cart')
        }
        return item.update(
          { quantity: item.quantity - 1 },
          { returning: true })
      })
      .then(() => next())
      .catch(next)
  },
  loadCart,
  (req, res, next) => {
    res.send({
      message: 'Quantity decreased by 1',
      cart: req.cart
    })
  })

  // PUT /:productId changes the quantity of an item in cart
  // We don't need this for the cart view -- do we need it anywhere else?
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

  // This warning is generated and implies we are missing a return statement, but does not impede the app: 'Warning: a promise was created in a handler at Users/maria/Desktop/GraceHopper/Tulsis/node_modules/express/lib/router/index.js:280:7 but was not returned from it, see http://goo.gl/rRqMUw'
function loadCart(req, res, next) {
  const user = req.user
  if (!user) {
    next()
  } else {
    Order.scope('populated')
      .findOrCreate({
        where: { user_id: user.id, status: 'Pending' },
        defaults: { user_id: user.id, status: 'Pending' },
        // include: [ User ]
      })
      .then(cart => {
        req.cart = cart[0]
        next()
      })
      .catch(next)
  }
}

module.exports.loadCart = loadCart
