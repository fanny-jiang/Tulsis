'use strict'

const db = require('APP/db')
const OrderItem = db.model('orderItems')

module.exports = require('express').Router()
// retrieve all order items for given order
.get('/:orderId', (req, res, next) =>
    OrderItem.findAll({
      where: {
        order_id: req.params.orderId
      }})
      .then(items => res.json(items))
      .catch(next))

// create an order item (when user clicks "Add to Cart")
.post('/:orderId/products/:productId', (req, res, next) =>
    OrderItem.create({
      order_id: req.params.orderId,
      product_id: req.params.productId
    })
    .then(item => res.status(201).json(item))
    .catch(next))

// update quantity of product in an order item
.put('/:orderId/products/:productId', (req, res, next) =>
    OrderItem.update(req.body, {
      where: {
        order_id: req.params.orderId,
        product_id: req.params.productId
      },
      returning: true
    })
    .then(res => res[1][0])
    .then((updatedItem) => res.json(updatedItem))
    .catch(next))

// delete an item from an order
.delete('/:orderId/products/:productId', (req, res, next) =>
    OrderItem.destroy({
      where: {
        order_id: req.params.orderId,
        product_id: req.params.productId
      }
    })
    .then(() => res.sendStatus(200))
    .catch(next))
