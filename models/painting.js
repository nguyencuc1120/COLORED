const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paintingSchema = new Schema({
      image: {
        type: String,
        required: true
      },  
        title: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      size: {
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

module.exports = paintingSchema 