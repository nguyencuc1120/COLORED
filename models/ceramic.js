const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ceramicSchema = new Schema({
      image: {
        type: String,
        required: true
      },  
        type: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      artName: {
        type: Schema.Types.ObjectId,
        ref: 'Art'
      }
})

module.exports = ceramicSchema 