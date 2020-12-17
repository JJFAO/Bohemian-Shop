//DETECT LOGED USER
const gridRow = document.getElementById('gridRow');
const logInButton = document.getElementById('logInButton');

function detectLogedUser() {
    const logedUser = JSON.parse(localStorage.getItem('logedUser'));

    if (logedUser) {
        logInButton.innerHTML = `
        <a class="nav-link dropdown-toggle" href="#" id="dropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${logedUser.username}
        </a>
        <div class="dropdown-menu" aria-labelledby="dropDown">
          <a class="dropdown-item" href="../docs/userProfile.html">Mi perfil</a>
          <a class="dropdown-item" onclick='cerrarSesion()'>Cerrar sesión</a>
        </div>


      `;
    } else {
        logInButton.innerHTML = `
    <a class="nav-link" href="../docs/login.html"> Log In </a>
    `;
    }
}

detectLogedUser();

// Funcion cerrar sesion
function cerrarSesion() {
    localStorage.removeItem('logedUser');
    window.location.reload();
}

//DISPLAY CART

function displayCart() {
    let products = JSON.parse(localStorage.getItem('products'));
    const showCart = [];
    if (products != null) {
        for (let i = 0; i < products.length; i++) {
            let product = products[i];

            if (parseInt(product.inCart) > 0) {
                const tbodyContent = `
      <tr>
              <th>
                <div class="text-center ">
                ${product.name}
                <img src="${product.image}"alt="Sin imagen" class="product-image" height=50px>
                </div>
              </th>
              <th class="text-center plus-minus">
                <button class="btn" onClick="removeProduct('${product.id}')">
                <img src="https://www.flaticon.es/svg/static/icons/svg/659/659892.svg" alt="flecha" width=15px">
                </button> ${product.inCart} <button class="btn" onClick="anotherProduct('${product.id}')">
                <img src="https://www.flaticon.es/svg/static/icons/svg/1828/1828926.svg" alt="flecha" width=15px>
                </button> 
              </th>
              <th class="text-center"> $ ${parseInt(product.price * product.inCart)} </td>
              </th>
      </tr>
      `;
                showCart.push(tbodyContent);
            }
            cartTable.innerHTML = showCart.join('');
        }
    }
}
displayCart();

function displayMobile() {
    let products = JSON.parse(localStorage.getItem('products'));
    const showMobile = [];
    if (products != null) {
        for (let i = 0; i < products.length; i++) {
            let product = products[i];

            if (parseInt(product.inCart) > 0) {
                const cartCard = `
    <div class="card">
    <div class="card-header">
     <img src="${product.image}" alt="Sin Imagen" width="100%" />
    </div>
    <div class="text-center">
    <h4${product.name}</h4>
    <p>
      Cantidad:
      <button class="btn" onClick="removeProduct('${product.id}')">
      <img src="https://www.flaticon.es/svg/static/icons/svg/659/659892.svg" alt="flecha" width=15px">
                </button> ${product.inCart} <button class="btn" onClick="anotherProduct('${product.id}')">
                <img src="https://www.flaticon.es/svg/static/icons/svg/1828/1828926.svg" alt="flecha" width=15px>
                </button> 
    </p>
    <p>
    Precio: ${parseInt(product.price * product.inCart)}
    </p>
  </div>
  </div>
  `;
                showMobile.push(cartCard);
            }
            mobileCart.innerHTML = showMobile.join('');
        }
    }
}

displayMobile();

function displayTotal() {
    let products = JSON.parse(localStorage.getItem('products'));
    let finalCost = 0;

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let partialCost = parseInt(product.price * product.inCart);
        finalCost = parseInt(finalCost) + partialCost;
        cost.innerHTML = finalCost;
    }
}

displayTotal();



function mobileTotal() {
  let products = JSON.parse(localStorage.getItem('products'));
  let finalCost = 0;

  for (let i = 0; i < products.length; i++) {
      let product = products[i];
      let partialCost = parseInt(product.price * product.inCart);
      finalCost = parseInt(finalCost) + partialCost;
      mobileCost.innerHTML = finalCost;
  }
}

mobileTotal();


function anotherProduct(p) {
    const products = JSON.parse(localStorage.getItem('products'));

    for (let i = 0; i < products.length; i++) {
        let product = products[i];

        if (p === product.id) {
            product.inCart = parseInt(product.inCart) + 1;
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    console.log(products);
    displayCart();
    displayMobile();
    displayTotal();
    mobileTotal();
    displayCartNumber();
}

function removeProduct(p) {
    const products = JSON.parse(localStorage.getItem('products'));

    for (let i = 0; i < products.length; i++) {
        let product = products[i];

        if (p === product.id) {
            product.inCart = parseInt(product.inCart) - 1;
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    console.log(products);
    displayCart();
    displayTotal();
    displayMobile();
    mobileTotal();
    displayCartNumber();
}

function displayCartNumber() {
    let products = JSON.parse(localStorage.getItem('products'));
    let cartNumber = 0;
    if (products != null) {
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            let partialCart = parseInt(product.inCart);
            cartNumber = parseInt(cartNumber) + partialCart;
            cartNum.innerHTML = cartNumber;
        }
    } else {
        cartNum.innerHTML = '0';
    }
}

displayCartNumber();
