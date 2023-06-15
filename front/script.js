const nail = document.getElementById('nail-button')
const ceramic = document.getElementById('ceramic-button')
const painting = document.getElementById('painting-button')
const artContainer = document.getElementById('artCardContainer')
const paintingContainer = document.getElementById('paintingContainer')
const artInfo = document.querySelector('.art-info')
const modal = document.getElementById('cartModal')
const cartButton = document.getElementById('cart-button')
const closeSpan = document.getElementsByClassName('close')[0]
const content= document.getElementById('content')

let currentArt = {}
let currentPainting= {}
let currentCeramic = {}
let currentNail = {}
let myCart = {}


const artCards = async (arts) => {
      // Card
      const card = document.createElement('div')
      card.classList.add('art-container')
      artInfo.innerHTML = ""

    //   for (let j = 0; j < currentArt.data.length; j++) {
            // Image 
            // const imageElement = document.createElement('img')
            // imageElement.src = `${currentArt.data[0].brandLogo}`
            // const imageDiv = document.createElement('div')
            
            // Brand Name
            // const artNameElement = document.createElement('h3')
            // const artNameDiv = document.createElement('div')
            
            // Brand Info
            // imageDiv.appendChild(imageElement)
            // imageDiv.classList.add('imageDiv')
            // card.appendChild(imageDiv)
            // artNameDiv.appendChild(artNameElement)
            // card.appendChild(artNameDiv)
            // artInfo.appendChild(card)
    //   }

      for(let i = 0; i < currentArt.data.length; i++) {
            const newDiv = document.createElement('div')

            //Image
            const pic = document.createElement('img')
            pic.src = `${currentArt.data[i].image}`
            pic.classList.add('artPic')
            const picDiv = document.createElement('div')

            // Model
            const artElement = document.createTextNode(`art: ${currentArt.data[i].title}`)
            const typeDiv = document.createElement('div')

            // Price    
            const priceElement = document.createTextNode(`Price: $${currentArt.data[i].price}`)
            const priceDiv = document.createElement('div')
            
            // Add To Cart Button
            const addToCartButton = document.createElement('button')
            addToCartButton.textContent = 'Add to Cart'
            const addToCartDiv = document.createElement('div')

            // Add To Cart Functionality
            addToCartButton.addEventListener('click', async() => {
                  const item = await axios.post(`http://localhost:3001/api/cart/${currentpainting.data[i]._id}`)
                    
            })

            picDiv.appendChild(pic)
            artDiv.appendChild(artElement)
            priceDiv.appendChild(priceElement)
            addToCartDiv.appendChild(addToCartButton)

            newDiv.appendChild(picDiv)
            newDiv.appendChild(typeDiv)
            newDiv.appendChild(artDiv)
            newDiv.appendChild(priceDiv)
            newDiv.appendChild(addToCartDiv)
            
            // card.appendChild(addToCartButton)
            // Add card to the desired place

            // View More Button
            const viewMoreButton = document.createElement('button')
            newDiv.append(viewMoreButton)
            card.appendChild(newDiv)
            viewMoreButton.textContent = 'View More'
            viewMoreButton.id = 'view-more'
            viewMoreButton.addEventListener('click', () => {
                  featureCurrentModel = currentArt.data[i]._id
                  featuresCards()
            })
      }
}

const paintingCard = async (paintings) => {
      let data= paintings.data
      console.log(data)
      let html=""
      for (const painting of data){
            let string = `<div><p>Title: ${painting.title}</p><p>Year: ${painting.year}</p><p>Size: ${painting.size}</p><p>Price: ${painting.price}</p><img src="${painting.image}" class="paintingimg"/></div>`
      html += string 
      }
      content.innerHTML=html 
}
const ceramicCard = async (ceramics) => {
      let data= ceramics.data
      console.log(data)
      let html=""
      for (const ceramic of data){
            let string = `<div><p>Type: ${ceramic.type}</p><p>Color: ${ceramic.color}</p><p>Price: ${ceramic.price}</p><img src="${ceramic.image}" class="ceramicimg"/></div>`
      html += string 
      }
      content.innerHTML=html 
}
const nailCard = async (nails) => {
      let data= nails.data
      console.log(data)
      let html=""
      for (const nail of data){
            let string = `<div><img src="${nail.image}" class="nailimg"/></div>`
      html += string 
      }
      content.innerHTML=html 
}
// painting 
painting.addEventListener('click', async () => {
      paintingArt = await axios.get('http://localhost:3001/api/art')
      currentArt = paintingArt

      console.log(currentArt)
      typePainting = await axios.get(`http://localhost:3001/api/paintings`)
      currentPainting = typePainting
      console.log(currentPainting)

      paintingCard(typePainting)

})

// ceramic
ceramic.addEventListener('click', async () => {
      ceramicArt = await axios.get('http://localhost:3001/api/art')
      currentArt = ceramicArt

      typeCeramic = await axios.get(`http://localhost:3001/api/ceramics`)
      currentCeramic = typeCeramic

      ceramicCard(typeCeramic)
})

// nail
nail.addEventListener('click', async () => {
      nailArt = await axios.get('http://localhost:3001/api/art')
      currentArt = nailArt

      typeNail = await axios.get(`http://localhost:3001/api/nails`)
      currentNail = typeNail

      nailCard(typeNail)
})





//cart modal functions
cartButton.onclick = function() {
      modal.style.display = 'block'
      console.log('working')
      cartInformation()
}

closeSpan.onclick = function() {
      modal.style.display = 'none'
}

window.onclick = function(e) {
      if (e.target == modal) {
            modal.style.display = 'none'
      }
}
