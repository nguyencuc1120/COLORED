const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artSchema = new Schema({
       artType: {
            type: String, 
            required: true
      }, 
    
})

module.exports = artSchema