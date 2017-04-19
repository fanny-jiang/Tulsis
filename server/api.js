'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ ok: true }))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/products', require('./products'))
  .use('/reviews', require('./reviews'))
  .use('/orders', require('./orders'))
  .use('/favorites', require('./favorites'))
  .use('/orderItems', require('./orderItems'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
