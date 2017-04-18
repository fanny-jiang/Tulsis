'use strict'

const {STRING, TEXT, INTEGER, ARRAY, ENUM} = require('sequelize')

// this model refers to a cart of individual order items
module.exports = db => db.define('orders', {
  id: {type: INTEGER,
    primaryKey: true
  },
  status: ENUM('Pending', 'Completed')
})

module.exports.associations = (Order, {Product, User, OrderItem}) => {
  // Order.hasMany(OrderItem, {through: RenameTable})
  Order.belongsTo(User)
  Order.belongsToMany(Product, {through: OrderItem})
}

  // Does sequelize store the previous values of an object?
