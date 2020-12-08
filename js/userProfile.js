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

function displayUserInfo() {
    const logedUser = JSON.parse(localStorage.getItem('logedUser'))
    console.log(logedUser);
    const almacenator = []
        const tableContent = `
        <div class="row">
        <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Nombre de usuario</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Email</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Image</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Birthdate</a>
          </div>
        </div>
        <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
            <ul class="list-group list-group-flush border">
            <li class="list-group-item">${logedUser.username}</li>
            </ul>
            </div>
            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
            <ul class="list-group list-group-flush border">
            <li class="list-group-item">${logedUser.email}</li>
            </ul>
            </div>
            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <img src="../img/user-profile-default.png" alt=""></li>
            </ul>
            </div>
            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
            <ul class="list-group list-group-flush border">
            <li class="list-group-item">
            ${logedUser.birthdate}</div></li>
            </ul>
          </div>
        </div>
      </div>
`
        almacenator.push(tableContent)
        


        userInfoContainer.innerHTML = almacenator.join('')

}

displayUserInfo()

