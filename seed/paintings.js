const db = require ('../db')
const { Art,Painting } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {

    const paintings = await Art.find({artType:'Paintings'})
    const pItems =[
        {
            image: "../front/images/liberated.JPG",  
            title:'Liberated',
            year:'2020',
            size:'36x48 inches',
            price: 5000,
            art_id: paintings[0]._id
        },
        {
            image: "../front/images/jarring.jpg",  
            title:'Jarring',
            year:'2020',
            size:'12x16 inches',
            price: 2000,
            art_id: paintings[0]._id
        },    
        {
            image: "../front/images/compartamentalize.jpeg",  
            title:'Compartamentalize',
            year:'2021',
            size:'20x24 inches',
            price: 3000,
            art_id: paintings[0]._id
        },
        {
            image: "../front/images/dissapate.JPG",  
            title:'Dissapate',
            year:'2020',
            size:'12x16 inches',
            price: 2000,
            art_id: paintings[0]._id
        },
        {
            image: "../front/images/rippleeffect.jpeg",  
            title:'Ripple Effect',
            year:'2022',
            size:'20x24 inches',
            price: 3000,
            art_id: paintings[0]._id
        },
        {
            image: "../front/images/buoyant.jpeg",  
            title:'Buoyant',
            year:'2020',
            size:'12x16 inches',
            price: 2000,
            art_id: paintings[0]._id
        },
        {
            image: "../front/images/serene.jpeg",  
            title:'Serene',
            year:'2021',
            size:'36x48 inches',
            price: 5000,
            art_id: paintings[0]._id
        },

    ]

  await painting.insertMany(pItems)
  console.log('Created pItems')
}
const run = async () => {
  await main()
  db.close()
}

run()