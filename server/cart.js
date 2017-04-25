'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderItem = db.model('orderItems')
const Product = db.model('products')
const Address = db.model('addresses')
const User = db.model('users') // for orders by a user
const { mustBeLoggedIn, forbidden, selfOnly } = require('./auth.filters')

const loadCart = (req, res, next) => {
  const user = req.user
  if (req.session.cartId) {
    Order.scope('populated')
    .findById(req.session.cartId)
    .then(order => {
      // check to see if there is a user -- does Order.getUser() === req.user?
      // if yes continue as below
      // else there is now a new user make the user own the order
      // else if there is a user with a different user id, create a new cart for the new user
      req.cart = order
      next()
    })
  } else {
    if (!user) {
  // we want to create a cart instance and put it on the session for the guest user
  // we'll move this over to the db once the user logs in
  Order.scope('populated')
    .create({status: 'Pending'})
    .then(cart => {
      req.cart = cart
      req.session.cartId = req.cart.id
      next()
    })
    .catch(next)
    } else {// if there is a user:
      Order.scope('populated')
        .findOrCreate({
          where: { user_id: user.id, status: 'Pending' },
          defaults: { user_id: user.id, status: 'Pending' },
          // include: [ User ]
        })
        .then(cart => {
          req.cart = cart[0]
          req.session.cartId = req.cart.id
          next()
        })
        .catch(next)
    }
  }
}

module.exports = require('express').Router()
  .use(loadCart)
  // GET / sends back the cart, which is an instance of Order
  .get('/',
  (req, res, next) =>
    res.send(req.cart)
  )

  // POST /:productId adds a new item to the cart
  .post('/:productId',
    (req, res, next) => {
      req.cart.addProduct(req.params.productId, { quantity: req.body.quantity })
      .then(() => next(), next)
    },
    loadCart,
    (req, res, next) => res.send(req.cart))


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


  // PUT route to complete an order, should also take care of shipping and payment information that comes from req.body
  .put('/:orderId/buy',
  (req, res, next) => {
    const orderItems = req.cart.dataValues.orderItems
    // Promise.map
    orderItems.forEach(orderItem => {
      const quantityToSubtract = orderItem.dataValues.quantity
      const quantityToSubtractFrom = orderItem.dataValues.product.quantity
      const productId = orderItem.dataValues.product.id
      Product.update(
        { quantity: quantityToSubtractFrom - quantityToSubtract },
        {
          where: { id: productId },
          returning: true
        })
        .then((product) => {
          console.log('Updated Product quantity', product[1][0].quantity)
          // next() ?
        })
        .catch(next)
    })
      // console.log('EACH ORDER ITEM\'S PRODUCT: ', orderItem.dataValues.product)
    return Address.findOrCreate({
      where: {
        name: req.body.address.name,
        street: req.body.address.street,
        city: req.body.address.city,
        zip: +req.body.address.zip,
        state: req.body.address.state
      },
      defaults: {
        address: req.body.address
      }
    })
      .then(returnVal => {
        const address = returnVal[0]
        Order.update({ status: 'Completed', address_id: address.id },
          {
            where: { id: req.params.orderId },
            returning: true
          }
        )
          .then((order) => {
            delete req.session.cartId
            return res.status(200).send({
              message: 'Checked out',
              cart: order[1][0]
            })
          }).catch(next)
      }).catch(next)
  })

