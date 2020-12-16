const profileCardContainer = document.getElementById('profileCardContainer')
const userInfoContainer = document.getElementById('userInfoContainer')


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
    window.location.href = '../docs/index.html'
  }

function displayProfileCard() {
    const logedUser = JSON.parse(localStorage.getItem('logedUser'))
        const almacenator = []
        const cardContent = `
        <div class="card profile-card">
                          <img src="/img/user-profile-default.png" alt="John" class="w-100 rounded-circle">
                          <h1>${logedUser.username}</h1>
                          <p class="title">${logedUser.email}</p>
                          <p>${logedUser.birthdate}</p>
                        </div>
        `
        almacenator.push(cardContent)
        


    profileCardContainer.innerHTML = almacenator.join('')
}

displayProfileCard()


/*Numeritos en el cart*/
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