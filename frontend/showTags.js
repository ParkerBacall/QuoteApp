const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const titleDiv = document.querySelector('.title-div')

fetch(`http://localhost:3000/tags/${id}`)
    .then(response => response.json())
    .then(tag => showTags(tag))
    .catch(error => console.log(error))

function showTags(tag){
    const tagTitle = document.querySelector('.tag-title')
    tagTitle.innerText = tag.name
    titleDiv.append(tagTitle)

    const cardsContainer = document.querySelector('.cards-container')
    document.body.append(cardsContainer)

    tag.quotes.map(quote => {
        const cardDiv = document.createElement('div')
        const quoteText = document.createElement('p')
        const quoteAuthor = document.createElement('h4')

        cardDiv.className = "card-div"
        quoteText.textContent = quote.text
        quoteAuthor.textContent = quote.author

        cardsContainer.appendChild(cardDiv)
        cardDiv.append(quoteText, quoteAuthor)
    })
    ShowTitleBar()
}

function ShowTitleBar(){
    const buttonDiv = document.createElement('div')
    buttonDiv.className = "button-div"
    titleDiv.append(buttonDiv)

    const fbButton = document.createElement('button')
    const twitterButton = document.createElement('button')
    const linkedInButton = document.createElement('button')

    fbButton.textContent = " "
    fbButton.className = "fb-button"
    twitterButton.textContent = " "
    twitterButton.className = "twitter-button"
    linkedInButton.textContent = " "
    linkedInButton.className = "linked-in-button"

    buttonDiv.append(fbButton, twitterButton, linkedInButton)

}