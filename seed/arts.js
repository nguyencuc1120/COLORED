const db = require ('../db')
const { Art } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {

    const art = [
        {artType:'Paintings'},
        {artType:'Ceramics'},
        {artType:'Nail Art'}
    ]

  await Art.insertMany(art)
  console.log('Created arts seed')
}
const run = async () => {
  await main()
  db.close()
}

run()