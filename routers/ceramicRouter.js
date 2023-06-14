const Router = require('express').Router()
const controller = require('../controllers/modelController')

Router.get('/', controller.findCeramics)
Router.get('/:id', controller.findCeramicById)
Router.get('/brands/:id', controller.findCeramicByBrandId) // api/models/art/"id"
Router.post('/', controller.createCeramic) // api/models?ceramic=""&price=""&image=""&artType="art_id"
Router.put('/', controller.updateCeramic) // api/models?id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deleteCeramic)

module.exports = Router