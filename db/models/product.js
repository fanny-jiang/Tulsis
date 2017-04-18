'use strict'

const {STRING, TEXT, INTEGER, ARRAY} = require('sequelize')

module.exports = db => db.define('products', {
  title: STRING,
  description: TEXT,
  price: INTEGER,
  photoUrl: {
    type: STRING,
    default: '../../public/images/mintConverse.JPG'}, // Non relative path functionality? Ask Ashi or someone else
  quantity: INTEGER,
  // Double check that this is a valid way of creating an array of SEQUELIZE.Strings
  category: ARRAY(STRING)
}, {
  scopes: {
    populated: () => ({ // function form lets us refer to undefined models
      include: [{
        model: db.model('review')
      }]
    })
  }
})

module.exports.associations = (Product, {User, Favorite, Order, OrderItem, Review}) => {
  Product.belongsToMany(User, {as: 'lovers', through: Favorite})
  Product.belongsToMany(Order, {through: OrderItem})
  Product.hasMany(Review)
}
