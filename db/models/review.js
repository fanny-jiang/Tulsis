const {TEXT, ENUM} = require('sequelize')

module.exports = db => db.define('reviews', {
  rating: {
    type: ENUM('1', '2', '3', '4', '5')
  },
  content: {
    type: TEXT
  },
})

module.exports.associations = (Review, {User, Product}) => {
  Review.belongsTo(User)
  Review.belongsTo(Product)
}


