// Variables
const gridRow = document.getElementById('gridRow')
const logInButton = document.getElementById('logInButton')


function detectLogedUser() {
  const logedUser = JSON.parse(localStorage.getItem('logedUser'))
  console.log(logedUser);

  if (Array.isArray(logedUser)) {
    logInButton.innerHTML = `
      <a class="nav-link" href="../html/userProfile.html" target="_blank">${logedUser}</a>
      `
      console.log('awa');
  } else {
    logInButton.innerHTML = `
    <a class="nav-link" href="../html/login.html" target="_blank"> Log In </a>
    `
    console.log(owo);
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
  <div class="modal fade" id="modal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
              ${getModal(product)}
                <a href="#productModal" class="fa fa-info" data-toggle="modal" data-target="#modal${product.id}"></a>
                <a href="#" class="fa fa-shopping-cart"></a>
              </div>
          </div>
        </div>
      `
      almacenator.push(tbodyContent)
  }
  gridRow.innerHTML = almacenator.join('')
}

displayGridProducts()

// const getModal = (product) => {
//   return `
//   <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Añadir al carrito</button>
//       </div>
//     </div>
//   </div>
// </div>
//       `;

// }

/*CAROUSEL*/
$('.carousel').carousel({
  interval: 2000
})
