const mongoose = require('mongoose')
const artSchema = require('./art')
const cartSchema = require('./cart')
const paintingSchema = require('./painting')
const ceramicSchema = require('./ceramic')
const nailSchema = require('./nail')

const Art = mongoose.model('Brand', artSchema)
const Painting = mongoose.model('Feature', paintingSchema)
const Cart = mongoose.model('Cart', cartSchema)
const Nail = mongoose.model('Model', nailSchema)
const Ceramic = mongoose.model('Model', ceramicSchema)


module.exports = {
      Art, 
      Painting, 
      Cart, 
      Ceramic,
      Nail
}