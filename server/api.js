'use strict'

const api = module.exports = require('express').Router()

const db = require('APP/db')
const Order = db.model('orders')



api.use((req, res, next) => {
  const user = req.user
  if (!user) {
    next()
  } else {
    Order.findOne({ where: { user_id: user.id, status: 'Pending' } })
      .then(cart => {
        req.cart = cart
        next()
      })
      .catch(next)
  }
})


api
  .get('/heartbeat', (req, res) => res.send({ ok: true }))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/products', require('./products'))
  .use('/reviews', require('./reviews'))
  .use('/orders', require('./orders'))
  .use('/favorites', require('./favorites'))
  .use('/orderItems', require('./orderItem'))
  .use('/cart', require('./cart'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
