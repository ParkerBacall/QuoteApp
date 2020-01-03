function showFavs(){
    const mainContent = document.querySelector('.main-content')
    const ahmedDiv = document.createElement('div')
    const twasDetails = document.createElement('p')
    const ahmedImg = document.createElement('h3')
    twasDetails.textContent = "If something isn't working for you... youre allowed to change your mind"
    ahmedImg.textContent =  "-somebody"
    
    mainContent.append(ahmedDiv)
    ahmedDiv.append(twasDetails, ahmedImg)
}

showFavs()