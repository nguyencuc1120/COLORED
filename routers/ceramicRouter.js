const Router = require('express').Router()
const controller = require('../controllers/ceramicController')

Router.get('/', controller.findCeramics)
Router.get('/:id', controller.findCeramicById)
Router.get('/art/:id', controller.findCeramicById) // api/models/art/"id"
Router.post('/', controller.createCeramic) // api/models?ceramic=""&price=""&image=""&artType="art_id"
Router.put('/', controller.updateCeramic) // api/models?id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deleteCeramic)

module.exports = Router