'use strict'
const db = require('APP/db')
const Product = db.model('products')

const { mustBeLoggedIn, forbidden, selfOnly } = require('./auth.filters')

module.exports = require('express').Router()

  // GET all products
  .get('/', (req, res, next) =>
    Product.findAll()
      .then(products => res.json(products))
      .catch(next))

//GET all products by category
  .get('/category/:categoryname', (req, res, next) => {
    const cat = req.params.categoryname
    Product.findAll({
      where: {
        category: {
        $contains: [cat]
        }
      }
    })
    .then(products => {
      res.json(products)
    })
    .catch(next)
    })

  // GET single product by id
  .get('/:id',
  (req, res, next) =>
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(next))

  // POST - create new product instance
  .post('/',
  (req, res, next) =>
    Product.create(req.body)
      .then(product => res.status(201).json(product))
      .catch(next))

  // PUT - update a product instance
  .put('/:id', (req, res, next) =>
    Product.update(req.body, {
      where: { id: req.params.id },
      returning: true
    })
      .then(response => response[1][0])
      .then((actualResponse) => res.json(actualResponse))
      .catch(next))

  // DELETE - delete a product instance
  .delete('/:id', (req, res, next) =>
    Product.destroy({
      where: { id: req.params.id }
    })
      .then(result => result === 0 ? res.sendStatus(404) : res.sendStatus(204))
      .catch(next))





// TODOS
// GET
// X Find all products
// X Find products by ID

// POST
// X Add a product

// UPDATE
// X admin: update product

// DELETE
// X admins: delete a product
