const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/tags/${id}`)
    .then(response => response.json())
    .then(tag => showTags(tag))
    .catch(error => console.log(error))

function showTags(tag){
    const h1 = document.createElement("h1")
    h1.innerText = tag.name

    const cardsContainer = document.querySelector('.cards-container')
    document.body.append(h1, cardsContainer)

    tag.quotes.map(quote => {
        const cardDiv = document.createElement('div')
        const p = document.createElement('p')
        const h3 = document.createElement('h3')
        console.log(quote)

        cardDiv.className = "card-div"
        p.textContent = quote.text
        h3.textContent = quote.author

        cardsContainer.appendChild(cardDiv)
        cardDiv.append(p, h3)
    })

}