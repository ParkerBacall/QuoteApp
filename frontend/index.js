
fetch('http://localhost:3000/quotes')
.then(response => response.json())
.then(quotes => showQuotes(quotes))
.catch(error => console.log(error))

function showQuotes(quotes){
    const cards = document.querySelector('.cardsContainer')
    quotes.map(quote => {
        const cardDiv = document.createElement('div')
        const p = document.createElement('p')
        const h3 = document.createElement('h3')
        
        p.innerText = quote.text 
        h3.innerText = quote.author
        cardDiv.className = "cards"
        cards.appendChild(cardDiv)
        cardDiv.append(p, h3)
    })

}