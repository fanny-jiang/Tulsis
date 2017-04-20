'use strict'

const {STRING, TEXT, INTEGER, ARRAY, ENUM} = require('sequelize')

// this model refers to a cart of individual order items
module.exports = db => db.define('orders', {
  status: ENUM('Pending', 'Completed')
}, {
  scopes: {
    populated: () => ({ // function form lets us refer to undefined models
      include: [{
        model: db.model('product')
      }]
    })
  }
})

module.exports.associations = (Order, {Product, User, OrderItem}) => {
  // Order.hasMany(OrderItem, {through: RenameTable})
  Order.belongsTo(User)
  Order.belongsToMany(Product, {through: OrderItem})
}

  // Does sequelize store the previous values of an object?


// Add associations to paymentInfo model and address model