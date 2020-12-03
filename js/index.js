// Variables
const gridRow = document.getElementById('gridRow')
const logInButton = document.getElementById('logInButton')


function detectLogedUser() {
  const logedUser = JSON.parse(localStorage.getItem('logedUser'))
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

detectLogedUser()

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
         <button type="button" class="btn btn-primary">Guardar en el carrito</button>
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
              <a href="#" class="fa fa-shopping-cart"></a>
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


/*CAROUSEL*/
$('.carousel').carousel({
  interval: 2000
})
