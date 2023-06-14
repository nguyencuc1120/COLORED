const Router = require('express').Router()
const controller = require('../controllers/paintingController')

Router.get('/', controller.findPaintings)
Router.get('/:id', controller.findPaintingById)
Router.get('/art/:id', controller.findPaintingById) // api/models/art/"id"
Router.post('/', controller.createPainting) // api/models?painting=""&price=""&image=""&artType="art_id"
Router.put('/', controller.updatePainting) // api/models?id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deletePainting)

module.exports = Router