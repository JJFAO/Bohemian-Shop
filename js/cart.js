//DETECT LOGED USER
const gridRow = document.getElementById('gridRow')
const logInButton = document.getElementById('logInButton')


function detectLogedUser() {
  const logedUser = JSON.parse(localStorage.getItem('logedUser'));
  console.log(logedUser);

  if (Array.isArray(logedUser)) {
    logInButton.innerHTML = `
      <a class="nav-link" href="../docs/userProfile.html" target="_blank">${logedUser[0][0].username}</a>
      `
  } else {
    logInButton.innerHTML = `
    <a class="nav-link" href="../docs/login.html" target="_blank"> Log In </a>
    `
  }
}

detectLogedUser()


//DISPLAY CART

function displayCart() {

  let  products = JSON.parse(localStorage.getItem('products'));

  const showCart = []
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
} 


