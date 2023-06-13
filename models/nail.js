const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nailSchema = new Schema({
      image: {
        type: String,
        required: true
      },
})

module.exports = nailSchema 