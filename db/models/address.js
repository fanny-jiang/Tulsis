'use strict'

const {STRING, INTEGER} = require('sequelize')

// this model refers to a cart of individual order items
module.exports = db => db.define('addresses', {
  name: STRING,
  street: STRING,
  city: STRING,
  zip: INTEGER,
  state: STRING,
})
