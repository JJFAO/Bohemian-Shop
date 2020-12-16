const newProduct = document.getElementById('addProductName')
const newPrice = document.getElementById('addProductPrice')
const newDescription = document.getElementById('addProductDescription')
const addImageBtn = document.getElementById('addImageBtn')
const newProductForm = document.getElementById('newProductForm')
const productTable = document.getElementById('productTable')
const editedName = document.getElementById('editedName')
const editedPrice = document.getElementById('editedPrice')
const editedImage = document.getElementById('editedImage')
const editProductForm = document.getElementById('editProductForm')
const logInButton = document.getElementById('logInButton')



function detectLogedUser() {
    const logedAdmin = JSON.parse(localStorage.getItem('logedAdmin'))
    if (logedAdmin) {
      logInButton.innerHTML = `
          <a class="nav-link dropdown-toggle" href="#" id="dropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${logedAdmin.username}
          </a>
          <div class="dropdown-menu" aria-labelledby="dropDown">
            <a class="dropdown-item" onclick='cerrarSesion()'>Cerrar sesión</a>
          </div>
        `
    } else {
        window.location.href = '../html/index.html'
    }
  }

  detectLogedUser()

  // Funcion cerrar sesion
function cerrarSesion() {
    localStorage.removeItem('logedAdmin')
    window.location.reload()
  }

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};


newProductForm.onsubmit = (e) => {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem('products')) || [];
    const name = newProduct.value;
    const price = newPrice.value;
    const image = addImageBtn.value;
    const description = newDescription.value;
    let inCart = 0;
    products.push({
        name,
        price,
        image,
        description,
        id: generateId(),
        createdAt: Date.now(),
        inCart
    })

    localStorage.setItem('products', JSON.stringify(products))
    newProductForm.reset();
    displayAllProducts()
}

function displayProducts(products) {
    const almacenator = []
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const tbodyContent = `
        <tr>
            <th scope="row">${product.name}</th>
                <td>
                <div class="text-center"">
                <img src="${product.image}"alt="Sin imagen" class="product-image">
                </div>
                </td>
                <td> ${product.price}</td>
                <td>${product.description}</td>
                <td>
                <div class="text-center">
                <div class="p-2">
                <button class="btn btn-outline-danger" onclick="deleteProduct('${product.id}')">Eliminar</button>
                </div>
                <div class="p-2">
                <button class="btn btn-outline-info" data-toggle="modal" data-target="#editProductModal" onclick="loadForm('${product.id}')">Editar</button>
                </div>
                </div>
                </td>
        </tr>
        `
        almacenator.push(tbodyContent)
    }



    productTable.innerHTML = almacenator.join('')
}

function displayAllProducts() {
    displayProducts(JSON.parse(localStorage.getItem('products')) || []);
    
}

displayAllProducts()

function deleteProduct(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const filteredProducts = products.filter((products) => products.id !== productId);
    localStorage.setItem('products', JSON.stringify(filteredProducts));
    displayAllProducts();
}

const loadForm = (productId) => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id === productId);
    editedName.value = product.name;
    editedPrice.value = product.price;
    editedImage.value = product.image;
    editProductId = productId;
}

editProductForm.onsubmit = (e) => {
    e.preventDefault()
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const name = editedName.value;
    const price = editedPrice.value;
    const image = editedImage.value;
    const updatedAt = Date.now();
    
    const updateProducts = products.map((p) => {
      if (p.id === editProductId) {
        const products = {
          ...p,
          name,
          price,
          image,
          updatedAt,
        }
        return products;
      } else {
        return p;
      }
    });
  
    localStorage.setItem('products', JSON.stringify(updateProducts));
    editProductForm.reset();
    displayAllProducts();
    $('#editProductModal').modal('hide')
  }

  function deleteUser(userId) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const filteredUsers = users.filter((users) => users.id !== userId);
    localStorage.setItem('users', JSON.stringify(filteredUsers));
    displayUsers();
  }

  function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.id
    const almacenator = []
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const tbodyContent = `
        <tr>
            <th scope="row">${user.username}</th>
            <td>${user.email}</td>
                    <td>
                        <div class="text-center">
                            <div class="p-2">
                                <button class="btn btn-outline-danger" onclick="deleteUser('${user.id}')">Eliminar</button>
                            </div>
                        </div>
                    </td>
            </th>
        </tr>
        `
        almacenator.push(tbodyContent)
    }
    userTable.innerHTML = almacenator.join('')
}

displayUsers()

function displaySubs() {
  const subscriptors = JSON.parse(localStorage.getItem('subs')) || [];
  const list = []
  subscriptors.id
  for (let i = 0; i < subscriptors.length; i++) {
      const subs = subscriptors[i];
      const tbodyContent = `
      <tr>          
          <td>${subs.mail}</td>
          </th>
      </tr>
      `
      list.push(tbodyContent)
  }
  subsTable.innerHTML = list.join('')
}

displaySubs()
