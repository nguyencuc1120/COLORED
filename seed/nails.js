const db = require ('../db')
const { Art,Nail } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {

    const nails = await Art.find({artType:'Nail Art'})
    const nItems =[
        {
            image: "../front/images/nail1.jpeg",  
            art_id: nails[0]._id
        },
        {
            image: "../front/images/nail2.jpeg", 
            art_id: nails[0]._id
        },
        {
            image: "../front/images/nail3.jpeg",  
            art_id: nails[0]._id
        },

    ]

  await nail.insertMany(nItems)
  console.log('Created nItems')
}
const run = async () => {
  await main()
  db.close()
}

run()