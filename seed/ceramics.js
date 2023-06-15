const db = require ('../db')
const { Art,Ceramic } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {

    const ceramics = await Art.findOne({artType: 'Ceramics'})


    const cItems =[
        {
            image: "./images/ceramic1.jpg",  
            type:'Plates',
            color:'Green',
            price: 100,
            art_id: ceramics._id
        },
        {
            image: "./images/ceramic2.jpg",  
            type:'Plates',
            color:'Brown',
            price: 50,
            art_id: ceramics._id
        },
        {
            image: "./images/ceramic3.jpg",  
            type:'Plates',
            color:'Blue',
            price: 40,
            art_id: ceramics._id
        },

    ]

  await Ceramic.insertMany(cItems)
  console.log('Created cItems')
}
const run = async () => {
  await main()
  db.close()
}

run()