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


function displayGridProducts(products) {

  const almacenator = []
  for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const tbodyContent = `
      <!--Grid column-->
        <div class="col-lg-4 col-md-12 mb-4">
  
          <img src="${products.image}" class="img-fluid mb-4" alt="">
  
          <img src="${products.image}" class="img-fluid mb-4" alt=""
            data-wow-delay="0.3s">
  
        </div>
      `
      almacenator.push(tbodyContent)
  }
  gridRow.innerHTML = almacenator.join('')
}
  function displayAllGridProducts() {
    displayGridProducts(JSON.parse(localStorage.getItem('products')) || []);
}

displayAllGridProducts()