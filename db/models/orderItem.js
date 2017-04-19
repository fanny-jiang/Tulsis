const {INTEGER} = require('sequelize')

module.exports = db => db.define('orderItems', {
  quantity: INTEGER,
})

// Does sequelize store the previous values of an object?
