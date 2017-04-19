'use strict'

const db = require('APP/db')
const Favorite = db.model('favorites')

module.exports = require('express').Router()
// retrieve favorites for given user
.get('/:userId', (req, res, next) =>
    Favorite.findAll({
      where: {
        user_id: req.params.userId
      }})
      .then(favorites => res.json(favorites))
      .catch(next))

// create a favorite item
.post('/:userId/products/:productId', (req, res, next) =>
    Favorite.create({
      user_id: req.params.userId,
      product_id: req.params.productId
    })
    .then(favorite => res.status(201).json(favorite))
    .catch(next))

// delete a favorite
.delete('/:userId/products/:productId', (req, res, next) =>
    Favorite.destroy({
      where: {
        user_id: req.params.userId,
        product_id: req.params.productId
      }
    })
    .then(() => res.sendStatus(200))
    .catch(next))
