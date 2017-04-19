const {TEXT, ENUM} = require('sequelize')

module.exports = db => db.define('reviews', {
  rating: ENUM('1', '2', '3', '4', '5'),
  content: TEXT,
})

module.exports.associations = (Review, {User, Product}) => {
  Review.belongsTo(User)
  Review.belongsTo(Product)
}


