const db = require ('../db')
const { Art,Nail } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {

    const nails = await Art.find({artType:'Nail Art'})
    const nItems =[
        {
            image: "./images/nail1.jpeg",  
            art_id: nails._id
        },
        {
            image: "./images/nail2.jpg", 
            art_id: nails._id
        },
        {
            image: "./images/nail3.jpg",  
            art_id: nails._id
        },

    ]

  await Nail.insertMany(nItems)
  console.log('Created nItems')
}
const run = async () => {
  await main()
  db.close()
}

run()