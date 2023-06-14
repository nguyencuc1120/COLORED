const Router = require('express').Router()
const controller = require('../controllers/modelController')

Router.get('/', controller.findNails)
Router.get('/:id', controller.findNailById)
Router.get('/brands/:id', controller.findNailByBrandId) // api/models/art/"id"
Router.post('/', controller.createNail) // api/models?nail=""&price=""&image=""&artType="art_id"
Router.put('/', controller.updateNail) // api/models?id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deleteNail)

module.exports = Router