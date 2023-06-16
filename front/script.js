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
let currentModel = {}
let myCart = {}



const artCards = async (arts) => {
      // Card
      const card = document.createElement('div')
      card.classList.add('art-container')
      artInfo.innerHTML = ""

   

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
            // const viewMoreButton = document.createElement('button')
            // newDiv.append(viewMoreButton)
            // card.appendChild(newDiv)
            // viewMoreButton.textContent = 'View More'
            // viewMoreButton.id = 'view-more'
            // viewMoreButton.addEventListener('click', () => {
            //       featureCurrentModel = currentArt.data[i]._id
            //       featuresCards()
            // })
      }
}

const paintingCard = async (paintings) => {
let data= paintings.data
      console.log(data)
      let html=""
      for (const painting of data){
            let string = `<div><p>Title: ${painting.title}</p><p>Year: ${painting.year}</p><p>Size: ${painting.size}</p><p>Price: ${painting.price}</p><img src="${painting.image}" class="paintingimg"/></div>`
            
            const newDiv = document.createElement('div')
            // const card = document.createElement('div')
                  // // Add To Cart Button
            const addToCartButton = document.createElement('button')
                  addToCartButton.textContent = 'Add to Cart'
                  // // Add To Cart Functionality
                  // addToCartButton.addEventListener('click', async() => {
                  //       const item = await axios.post(`http://localhost:3001/api/cart/${data.title}`)
                          
                  // })
                  newDiv.appendChild(addToCartButton)
                  html += string 
                  console.log(addToCartButton)
                  // card.appendChild(newDiv)
                  // artInfo.appendChild(card)
      }
      content.innerHTML=html 

      //querySelectorAll for string elements for line 79 
      //run a for each for string elements for the add to cart btn and append cart btn
      //implement add to cart func as event listener 
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
const cartInformation = async () => {

      myCart = await axios.get("http://localhost:3001/api/cart")
      console.log(myCart)

      let total = ""
      let cartDiv = document.querySelector('.modal-footer')
      let newDiv = document.querySelector('.modal-information')
      newDiv.innerHTML = ""

      for (let i = 0; i < myCart.data.length; i++) {
            
            let imageDiv = document.createElement('div')
            let imageElement = document.createElement('img')
            imageElement.src = `${myCart.data[i].image}`
            imageElement.classList.add('modelPic')
            let modelDiv = document.createElement('div')
            let modelElement = document.createTextNode(`Model: Will make axios call to grab info`)
            let priceDiv = document.createElement('div')
            let priceElement = document.createTextNode(`Price: $${myCart.data[i].price}`)
            let quantityDiv = document.createElement('div')
            let quantityElement = document.createTextNode(`Quantity: ${myCart.data[i].quantity}`)
            let subtotalDiv = document.createElement('div')
            let subtotalElement = document.createTextNode(`Subtotal: $${myCart.data[i].subtotal}`)
            // add quantity plus minus buttons here
            // price = parseInt(myCart.data[i].subtotal)
            // total += price
            const removeFromCartButton = document.createElement('button')
            removeFromCartButton.textContent = 'Remove from cart'
            // // Add To Cart Functionality
            removeFromCartButton.addEventListener('click', async() => {
                  const item = await axios.delete(`http://localhost:3001/api/cart/${myCart.data[i]._id}`)
                  console.log(myCart.data[i]._id)
                  modal.style.display = 'none'                   
            })


            imageDiv.appendChild(imageElement)
            modelDiv.appendChild(modelElement)
            priceDiv.appendChild(priceElement)
            quantityDiv.appendChild(quantityElement)
            subtotalDiv.appendChild(subtotalElement)
            newDiv.appendChild(imageDiv)
            newDiv.appendChild(modelDiv)
            newDiv.appendChild(priceDiv)
            newDiv.appendChild(quantityDiv)
            newDiv.appendChild(subtotalDiv)
            newDiv.appendChild(removeFromCartButton)
      }

      let cartTotalDiv = document.createElement('div')
      let cartTotalElement = document.createTextNode(`Total: ${total}`)
      cartTotalDiv.appendChild(cartTotalElement)
      cartDiv.appendChild(cartTotalDiv)
      
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





const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const updateNameInput = document.getElementById("update-name-input");
const updateEmailInput = document.getElementById("update-email-input");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUserId = null;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Functions
function renderTable() {
  tableBody.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const actionsTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    idTd.innerText = user.id;
    nameTd.innerText = user.name;
    emailTd.innerText = user.email;
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    editBtn.addEventListener("click", () => {
      showUpdateForm(user.id);
    });
    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });
    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(actionsTd);
    tableBody.appendChild(tr);
  }
}

function addUser() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  if(email.match(validRegex)){
    if(name && email != null){
      var id = 1;
      var val = users.map(function(x){return x.id; }).indexOf(id);
      while(val != -1){
      id++;
      val = users.map(function(x){return x.id; }).indexOf(id);
  }
      const user = {
        id: id,
        name: name,
        email: email,
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      nameInput.value = "";
      emailInput.value = "";
      renderTable();
    }else{
      alert("Name is Required");
    }
  }else{
    alert("Invalid email address!");
  }
}

function updateUser() {
  const name = updateNameInput.value;
  const email = updateEmailInput.value;
  if(email.match(validRegex)){
    const index = users.findIndex((user) => user.id === currentUserId);
    if (index !== -1) {
      users[index].name = name;
      users[index].email = email;
      localStorage.setItem("users", JSON.stringify(users));
      hideUpdateForm();
      renderTable();
    }
  }else{
    alert("Invalid email address!");
  }
}

function showUpdateForm(userId) {
  const user = users.find((user) => user.id === userId);
  if (user) {
    updateNameInput.value = user.name;
    updateEmailInput.value = user.email;
    currentUserId = user.id;
    updateBtn.addEventListener("click", updateUser);
    cancelBtn.addEventListener("click", hideUpdateForm);
    updateBtn.style.display = "inline-block";
    cancelBtn.style.display = "inline-block";
    updateNameInput.style.display = "inline-block";
    updateEmailInput.style.display = "inline-block";
    document.getElementById("update-container").style.display = "block";
  }
}

function hideUpdateForm() {
  updateNameInput.value = "";
  updateEmailInput.value = "";
  currentUserId = null;
  updateBtn.removeEventListener("click", updateUser);
  cancelBtn.removeEventListener("click", hideUpdateForm);
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
  updateNameInput.style.display = "none";
  updateEmailInput.style.display = "none";
  document.getElementById("update-container").style.display = "none";
}

function deleteUser(userId) {
  users = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(users));
  if (users.length == 0){
    hideUpdateForm();
  };
  renderTable();
}

// Event Listeners
addBtn.addEventListener("click", addUser);

// Initialize table
renderTable();


