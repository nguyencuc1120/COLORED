const db = require ('../db')
const { Art,Ceramic } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {

    const ceramics = await Art.find({artType:'Ceramics'})
    const cItems =[
        {
            image: "../front/images/ceramic1.jpg",  
            type:'Plates',
            color:'Green',
            price: 100,
            art_id: ceramics[0]._id
        },
        {
            image: "../front/images/ceramic2.jpg",  
            type:'Plates',
            color:'Brown',
            price: 50,
            art_id: ceramics[0]._id
        },
        {
            image: "../front/images/ceramic3.jpg",  
            type:'Plates',
            color:'Blue',
            price: 40,
            art_id: ceramics[0]._id
        },

    ]

  await ceramic.insertMany(cItems)
  console.log('Created cItems')
}
const run = async () => {
  await main()
  db.close()
}

run()