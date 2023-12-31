const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 3001
const AppRouter = require('./routers/appRouter')
const landingPage = require('./controllers/artController')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// app.get('/', landingPage.findArts)
app.use('/api', AppRouter)
app.use('/', express.static('front'))
app.listen(PORT, () => {
      console.log(`Express servers on port: ${PORT}`)})