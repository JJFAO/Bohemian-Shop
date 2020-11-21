const newProduct = document.getElementById('addProductName')
const newPrice = document.getElementById('addProductPrice')
const addImageBtn = document.getElementById('addImageBtn')
const newProductForm = document.getElementById('newProductForm')
const productTable = document.getElementById('productTable')

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

newProductForm.onsubmit = (e) => {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem('products')) || [];
    const name = newProduct.value;
    const price = newPrice.value;
    const image = addImageBtn.value;

    products.push({
        name,
        price,
        image,
        id: generateId(),
        createdAt: Date.now()
    })

    localStorage.setItem('products', JSON.stringify(products))
    console.log(products);
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
                <img src="${product.image}"alt="nada" class="product-image">
                </td>
                <td>${product.price}</td>
                <td>${product.id}</td>
        </tr>
        `
        console.log(product.image);
        almacenator.push(tbodyContent)
    }



    productTable.innerHTML = almacenator.join('')
}

function displayAllProducts() {
    displayProducts(JSON.parse(localStorage.getItem('products')) || []);
}

displayAllProducts()

