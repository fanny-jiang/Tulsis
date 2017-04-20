'use strict'

const {STRING, INTEGER, DATEONLY} = require('sequelize')

// this model refers to a cart of individual order items
module.exports = db => db.define('payments', {
  name: STRING,
  ccNumber: INTEGER,
  ccType: STRING,
  cvcCode: INTEGER,
  expiration: DATEONLY
})
