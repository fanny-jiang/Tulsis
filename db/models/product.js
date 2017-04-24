'use strict'

const { STRING, TEXT, INTEGER, ARRAY } = require('sequelize')
const Review = require('./review')

module.exports = db => db.define('products', {
  title: {
    type: STRING,
    allowNull: false
  },
  description: TEXT,
  price: {
    type: INTEGER,
    allowNull: false
  },
  photoUrl: {
    type: STRING,
    default: '../../public/images/mintConverse.JPG'
  }, // Non relative path functionality? Ask Ashi or someone else
  quantity: {
    type: INTEGER,
    allowNull: false
  },
  // Double check that this is a valid way of creating an array of SEQUELIZE.Strings
  category: ARRAY(STRING)
}, {
  scopes: {
    populated: () => ({ // function form lets us refer to undefined models
      include: [{
        model: Review
      }]
    })
  }
})

module.exports.associations = (Product, {User, Favorite, Order, OrderItem, Review}) => {
  Product.belongsToMany(User, {as: 'lovers', through: Favorite})
  Product.belongsToMany(Order, {through: OrderItem})
  Product.hasMany(Review)
}
