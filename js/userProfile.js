const profileCardContainer = document.getElementById('profileCardContainer')
const userInfoContainer = document.getElementById('userInfoContainer')


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


