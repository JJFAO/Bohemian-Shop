/*const gridRow = document.getElementById('gridRow')
//const logInButton = document.getElementById('logInButton')


function detectLogedUser() {
  const logedUser = JSON.parse(localStorage.getItem('logedUser'));
  console.log(logedUser);

  if (Array.isArray(logedUser)) {
    logInButton.innerHTML = `
      <a class="nav-link" href="../html/userProfile.html" target="_blank">${logedUser[0][0].username}</a>
      `
  } else {
    logInButton.innerHTML = `
    <a class="nav-link" href="../html/login.html" target="_blank"> Log In </a>
    `
  }
}

detectLogedUser()*/

let carts = document.querySelectorAll('.add-cart');
const products = JSON.parse(localStorage.getItem('products'));
//const productTable = document.getElementById('productTable')

for (let i = 0; i < carts.length; i++) {
  console.log(carts);
  carts[i].addEventListener('click',() => {
    cartNumbers(products[i])
    totalCost(products[i])
  })
}

function onLoadCartNumbers(){
  let cartQuant = localStorage.getItem('cartNumbers');
  if (cartQuant){
    document.querySelector('.cart span').textContent = cartQuant
  }
}


function cartNumbers(product) {

  let cartQuant = parseInt( localStorage.getItem('cartNumbers'));

  if (cartQuant){

    localStorage.setItem('cartNumbers',cartQuant + 1);
    document.querySelector('.cart span').textContent = cartQuant + 1
  }else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1
  }
  setItems(product)
}

function setItems(product){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems)

  if (cartItems !=null){
    if (cartItems[product] = undefined){
      product.inCart = 1
      cartItems={
        ...cartItems,
        product,
      }
    }
    product.inCart = parseInt(product.inCart) +1;
    cartItems = {
      product,
  }
  }else {
      product.inCart = 1;
      cartItems = {
        product,
    }
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems))

}

function totalCost(product) {
    //console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null){
      cartCost = parseInt(cartCost); 
      localStorage.setItem("totalCost",cartCost + parseInt(product.price))
    }else{
    localStorage.setItem("totalCost", product.price)
    }
}

//Para sacar la "longitud" del objeto
var cartSize = function(obj) {
  var count = 0;
  
  if (typeof obj == "object") {
  
      if (Object.keys) {
          count = Object.keys(obj).length;
      } else if (window._) {
          count = _.keys(obj).length;
      } else if (window.$) {
          count = $.map(obj, function() { return 1; }).length;
      } else {
          for (var key in obj) if (obj.hasOwnProperty(key)) count++;
      }
      
  }
  
  return count;
};



function displayCart(products) {

  const shoppingcart = []
  for (let i = 0; i < cartSize(products); i++) {
      const product = products[i];
      const tbodyContent = `
      <tr>
          <th scope="row">${product.name}</th>
              <td>
              <div class="text-center"">
              <img src="${product.image}"alt="Sin imagen" class="product-image" width="50px">
              </div>
              </td>
              <td> ${product.price}</td>
              <td>${product.inCart}</td>
              <td>
              </td>
      </tr>
      `
      shoppingcart.push(tbodyContent)
      console.log(tbodyContent)
  }
  productTable.innerHTML = shoppingcart.join(',')
}


function displayAllCart(c) {
  displayCart(c);
  
}

displayCart(products)



onLoadCartNumbers()
