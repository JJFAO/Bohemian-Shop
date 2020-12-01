// declaracion variables
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
const newUsername = document.getElementById('newUsername');
const newPassword = document.getElementById('newPassword');
const newEmail = document.getElementById('newEmail');
const newBirthdate = document.getElementById('newBirthdate');
const loginError = document.getElementById('loginError');
// cuenta admin
const adminAccount = [{
    username: 'admin',
    password: 'admin123'
}]

// Funcion registrar usuarios
registerForm.onsubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || []
    const username = newUsername.value;
    const password = newPassword.value;
    const email = newEmail.value;
    const birthdate = newBirthdate.value;

    users.push({
        username,
        password,
        email,
        birthdate
    })
    localStorage.setItem('users', JSON.stringify(users))
    registerForm.reset()
    $('#registerModal').modal('hide')
}


// Funcion validar usuarios
loginForm.onsubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const username = usernameInput.value
    const password = passwordInput.value

    if (adminAccount.find(admin => admin.username === username && admin.password === password)) {
        window.location.href = 'admin.html';

    } else if (users.find(user => user.username === username && user.password === password)) {
        // window.location.href = 'index.html';
        
        const logedUser = JSON.parse(localStorage.getItem('logedUser')) || []
        logedUser.push({
            username
        })

    } else {
        const row = `
        <div class="alert alert-danger alert-dismissible" role="alert" >
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Error!</strong> Usuario y/o contraseña erroneos!
    </div>
    `
    loginError.innerHTML = row
    }
}
