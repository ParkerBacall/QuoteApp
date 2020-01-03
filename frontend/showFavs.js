function showFavs(){
    const mainContent = document.querySelector('.main-content')
    const ahmedDiv = document.createElement('div')
    const twasDetails = document.createElement('p')
    const ahmedImg = document.createElement('img')
    twasDetails.textContent = 'add favorite quotes here'
    
    mainContent.append(ahmedDiv)
    ahmedDiv.append(twasDetails, ahmedImg)
}

showFavs()