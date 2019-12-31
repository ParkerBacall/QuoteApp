
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

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'X'
        deleteButton.addEventListener('click', ()=>{
            event.target.parentNode.remove()
            deleteQuote(quote.id)
        })


        
        p.innerText = quote.text 
        h3.innerText = quote.author
        cardDiv.className = "cards"
        cards.appendChild(cardDiv)
        cardDiv.append(p, deleteButton, h3)
        
        quote.tags.map(tag => {
            a = document.createElement('a')
            a.innerHTML = `<a href='showTags.html?id=${tag.id}'>${tag.name}</a>`
            cardDiv.appendChild(a)
        })
    })
}

function deleteQuote(id){
    fetch(`http://localhost:3000/quotes/${id}`,{
    method: 'DELETE'
    })
}





fetch('http://localhost:3000/tags')
.then(response => response.json())
.then(tags => showTags(tags))

function showTags(tags){
    const tagDropdown = document.getElementById('tagDropdown')
    tags.map(tag => {
        const option = document.createElement('option')
        option.textContent = tag.name
        option.value = tag.id
        tagDropdown.appendChild(option)
    })
}