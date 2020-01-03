fetch('http://localhost:3000/quotes')
.then(response => response.json())
.then(quotes => randomQuote(quotes))

const mainContent = document.querySelector('.main-content')

function randomQuote(quotes) {
    const quoteDiv = document.createElement('div')
    const quoteText = document.createElement('p')
    const quoteAuthor = document.createElement('h4')

    const randoQuote = quotes[Math.floor(Math.random() * quotes.length)]
    
    quoteDiv.className = "quote-div"
    quoteText.textContent = randoQuote.text
    quoteAuthor.textContent = randoQuote.author

    mainContent.append(quoteDiv)
    quoteDiv.append(quoteText, quoteAuthor)
 }
 
