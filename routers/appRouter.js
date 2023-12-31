const Router = require('express').Router()
const artRouter = require('./artRouter')
const cartRouter = require('./cartRouter')
const ceramicRouter = require('./ceramicRouter')
const nailRouter = require('./nailRouter')
const paintingRouter = require('./paintingRouter')

Router.use('/art', artRouter)
Router.use('/cart', cartRouter)
Router.use('/ceramics', ceramicRouter)
Router.use('/nails', nailRouter)
Router.use('/paintings', paintingRouter)

module.exports = Router