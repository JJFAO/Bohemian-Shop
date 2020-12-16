// Variables
const gridRow = document.getElementById('gridRow')
const logInButton = document.getElementById('logInButton')
const productTable = document.getElementById('productTable')
const formSub = document.getElementById('formSub');
const emailSub = document.getElementById('emailSub');
const addProduct = document.getElementById('addProduct');
const products = localStorage.getItem('products') ;

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

/*NAVABAR EFFECT */
$(function () {
    $(document).scroll(function () {
      var $nav = $(".sticky-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
$(".img-fluid").addClass("wow fadeIn z-depth-1-half");

const getModal = (product) => {
  return `
  <!-- Modal -->

  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal${product.id}">
   <div class="modal-dialog modal-lg">
     <div class="modal-content">
       <div class="modal-body d-flex row p-0">
         <div class="col-6 d-flex align-items-center">
           <img src="${product.image}" alt="" class="w-100">
         </div>
         <div class="col-6 p-3 pt-4">
           <h3 class="modal-product-title">${product.name}</h3>
           <h2>$ ${product.price}</h2>
           <p class="modal-product-description p-3">${product.description}</p>
         </div>
       </div>
       <div class="modal-footer p-2 pt-0">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
         <button type="submit" id="addProduct" class="btn btn-primary add-cart" onClick="addToCart('${product.id}')" >Guardar en el carrito</button>
       </div>
     </div>
   </div>
 </div>

            
      `;

}

function displayGridProducts() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const almacenator = []
  for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const tbodyContent = `
        <div class="col-lg-4 col-md-12 mb-4">
          <div class="btn06"> 
            <img src="${product.image}" class="img-fluid productImage" alt="image1">
            <div class="ovrly"></div>
              <div class="buttons">
              <a href="#productModal" class="fa fa-info" data-toggle="modal" data-target="#modal${product.id}"></a>
              <a href="#" class="fa fa-shopping-cart add-cart" type="submit" id="addProduct" onClick="addToCart('${product.id}')"> </a>
              </div>
              </div>
              ${getModal(product)}
        </div>
      `
      almacenator.push(tbodyContent)
  }
  gridRow.innerHTML = almacenator.join('')
}

displayGridProducts()

/*ADD TO CART*/
function addToCart(p) {
 
  const products = JSON.parse(localStorage.getItem('products')) ;
 
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if ( p === product.id) {
      product.inCart = parseInt(product.inCart) + 1
    } 
  }
  localStorage.setItem('products', JSON.stringify(products));
  console.log(products);
} 

/*NUMERITOS CUQUIS PARA EL CART*/
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



/*CAROUSEL*/
$('.carousel').carousel({
  interval: 2000
})

/*SUSCRIPTORES*/
function addSub(){

}
formSub.onsubmit = (e) => {
  e.preventDefault();
  const subs = JSON.parse(localStorage.getItem('subs')) || [];
  const mail = document.getElementById('emailSub').value;
  
  subs.push({
      mail: mail,
  })

  const subsJson = JSON.stringify(subs);
  localStorage.setItem('subs', subsJson);

  console.log("formUser.onsubmit -> subs", subs);

  formSub.reset();
}

