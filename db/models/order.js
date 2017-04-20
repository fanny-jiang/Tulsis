'use strict'

const {STRING, TEXT, INTEGER, ARRAY, ENUM} = require('sequelize')

// this model refers to a cart of individual order items

const Order = module.exports = db => db.define('orders', {
  status: ENUM('Pending', 'Completed')
}, {
  scopes: {
    populated: () => ({ // function form lets us refer to undefined models
      include: [{
        model: db.model('orderItems'), include: [db.model('products')]
      }]
    })
  }
})

module.exports.associations = (Order, {Product, User, OrderItem}) => {
  // Order.hasMany(OrderItem, {through: RenameTable})
  Order.belongsTo(User)
  Order.belongsToMany(Product, {through: OrderItem})
  Order.OrderItem = OrderItem
  Order.hasMany(OrderItem)
}

  // Does sequelize store the previous values of an object?
