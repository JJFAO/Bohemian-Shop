// Variables
const gridRow = document.getElementById('gridRow')

/*NAVABAR EFFECT */
$(function () {
    $(document).scroll(function () {
      var $nav = $(".sticky-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
$(".img-fluid").addClass("wow fadeIn z-depth-1-half");


function displayGridProducts() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const almacenator = []
  for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const tbodyContent = `
        <div class="col-lg-4 col-md-12 mb-4">
  
          <img src="${product.image}" class="img-fluid mb-4" alt="image1">
  
        </div>
      `
      almacenator.push(tbodyContent)
  }
  gridRow.innerHTML = almacenator.join('')
}

displayGridProducts()
