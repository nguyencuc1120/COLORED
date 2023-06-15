const mongoose = require('mongoose')
const artSchema = require('./art')
const cartSchema = require('./cart')
const paintingSchema = require('./painting')
const ceramicSchema = require('./ceramic')
const nailSchema = require('./nail')

const Art = mongoose.model('Art', artSchema)
const Painting = mongoose.model('painting', paintingSchema)
const Cart = mongoose.model('Cart', cartSchema)
const Nail = mongoose.model('Nail', nailSchema)
const Ceramic = mongoose.model('Ceramic', ceramicSchema)


module.exports = {
      Art, 
      Painting, 
      Cart, 
      Ceramic,
      Nail
}