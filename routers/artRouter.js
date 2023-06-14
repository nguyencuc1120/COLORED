const Router = require('express').Router()
const controller = require('../controllers/artController')

Router.get('/', controller.findArts) // api/models
Router.get('/:id', controller.findArtById) // api/models/"id"
Router.get('/name/:name', controller.findArtByName) // api/models?name=""
Router.put('/', controller.updateArt) // api/models?id=""&whatToUpdate=""&update=""
Router.post('/',controller.createArt) // api/models?art=""&brandLogo=""
Router.delete('/:id', controller.deleteArt)

module.exports = Router