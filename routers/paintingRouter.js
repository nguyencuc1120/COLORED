const Router = require('express').Router()
const controller = require('../controllers/modelController')

Router.get('/', controller.findPaintings)
Router.get('/:id', controller.findPaintingById)
Router.get('/brands/:id', controller.findPaintingByBrandId) // api/models/art/"id"
Router.post('/', controller.createPainting) // api/models?painting=""&price=""&image=""&artType="art_id"
Router.put('/', controller.updatePainting) // api/models?id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deletePainting)

module.exports = Router