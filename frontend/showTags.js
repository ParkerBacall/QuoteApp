const searchParams = new URLSearchParams(window.location.search)
const query = searchParams.get('id')
console.log(query)

fetch(`http://localhost:3000/tags/${query}`)
    .then(response => response.json())
    .then(tag => showTags(tag))
    .catch(error => console.log(error))

function showTags(tag){
    const h1 = document.createElement("h1")
    h1.innerText = tag.name

    const cards = document.querySelector('.cardsContainer')
    document.body.append(h1, cards)

    tag.quotes.map(quote => {
        const cardDiv = document.createElement('div')
        const p = document.createElement('p')
        const h3 = document.createElement('h3')

        cardDiv.className = "cards"
        p.textContent = quote.text
        h3.textContent = quote.author

        cards.appendChild(cardDiv)
        cardDiv.append(p, h3)
    })

}