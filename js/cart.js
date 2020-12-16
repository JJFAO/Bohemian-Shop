//DETECT LOGED USER
const gridRow = document.getElementById('gridRow')
const logInButton = document.getElementById('logInButton')


function detectLogedUser() {
  const logedUser = JSON.parse(localStorage.getItem('logedUser'))

  if (logedUser) {
    logInButton.innerHTML = `
        <a class="nav-link dropdown-toggle" href="#" id="dropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${logedUser.username}
        </a>
        <div class="dropdown-menu" aria-labelledby="dropDown">
          <a class="dropdown-item" href="../docs/userProfile.html">Mi perfil</a>
          <a class="dropdown-item" onclick='cerrarSesion()'>Cerrar sesión</a>
        </div>


      `
  } else {
    logInButton.innerHTML = `
    <a class="nav-link" href="../docs/login.html"> Log In </a>
    `
  }
}

detectLogedUser()

// Funcion cerrar sesion
function cerrarSesion() {
  localStorage.removeItem('logedUser')
  window.location.reload()
}

//DISPLAY CART


function displayCart() {
  
  let  products = JSON.parse(localStorage.getItem('products'));
  const showCart = []
  if (products != null) {
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if ( parseInt(product.inCart) > 0) {
    const tbodyContent = `
      <tr>
          <th scope="row" class="text-center border-0">${product.name}</th>
              <td class="border-0">
                <div class="text-center ">
                <img src="${product.image}"alt="Sin imagen" class="product-image" height=50px>
                </div>
              </td>
              <td class="text-center border-0 plus-minus">
                <button class="btn" onClick="removeProduct('${product.id}')">
                <img src="https://www.flaticon.es/svg/static/icons/svg/659/659892.svg" alt="flecha" width=15px">
                </button> ${product.inCart} <button class="btn" onClick="anotherProduct('${product.id}')">
                <img src="https://www.flaticon.es/svg/static/icons/svg/1828/1828926.svg" alt="flecha" width=15px>
                </button> 
              </td>
              <td class="text-center border-0"> $ ${parseInt(product.price * product.inCart)} </td>
              </td>
              </td>
      </tr>
      `
        showCart.push(tbodyContent)
      }
      cartTable.innerHTML = showCart.join('')
    }
  }
 }
 displayCart()

 function displayTotal() {

  let  products = JSON.parse(localStorage.getItem('products'));
  let finalCost = 0;

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let partialCost = parseInt(product.price * product.inCart)
    finalCost = parseInt(finalCost) + partialCost  
    cost.innerHTML = finalCost
  }
 }
 
 
displayTotal()



 function anotherProduct(p) {
 
  const products = JSON.parse(localStorage.getItem('products')) ;
 
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if ( p === product.id) {
      product.inCart = parseInt(product.inCart) + 1
    } 
  }
  localStorage.setItem('products', JSON.stringify(products));
  console.log(products);
  displayCart()
  displayTotal()
  displayCartNumber()
} 


 function removeProduct(p) {
 
  const products = JSON.parse(localStorage.getItem('products')) ;
 
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if ( p === product.id) {
      product.inCart = parseInt(product.inCart) - 1
    } 
  }
  localStorage.setItem('products', JSON.stringify(products));
  console.log(products);
  displayCart()
  displayTotal()
  displayCartNumber()
} 


function displayCartNumber() {

  let  products = JSON.parse(localStorage.getItem('products'));
  let cartNumber = 0;
  if (products != null) {
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      let partialCart = parseInt(product.inCart)
      cartNumber = parseInt(cartNumber) + partialCart  
      cartNum.innerHTML = cartNumber
    }
  } else {
      cartNum.innerHTML = '0'
  }
 }
 
 
displayCartNumber()

