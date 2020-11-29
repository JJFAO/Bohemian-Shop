// declaracion variables
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
const newUsername = document.getElementById('newUsername');
const newPassword = document.getElementById('newPassword');
const newEmail = document.getElementById('newEmail')
const newBirthdate = document.getElementById('newBirthdate')
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
    console.log(users);
}

// Funcion validar usuarios
loginForm.onsubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    username = usernameInput.value
    password = passwordInput.value
    
    if (adminAccount.find( admin => admin.username === username && admin.password === password)) {
        console.log('admin validado');
    } else if (users.find(user => user.username === username && user.password === password)) {
        console.log('usuario normal validado');
    } else {
        console.log('usuario no valido');
    }
}




