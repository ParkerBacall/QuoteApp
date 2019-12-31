
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
        const input = document.createElement('input')

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'X'
        deleteButton.addEventListener('click', ()=>{
            event.target.parentNode.remove()
            deleteQuote(quote.id)
        })

        const updateButton = document.createElement('button')
        updateButton.innerText = 'update'
        updateButton.addEventListener('click', ()=>{
           updateQuote(quote.id, input.value)
        })

        input.name = "text"
        
        p.innerText = quote.text 
        h3.innerText = quote.author
        cardDiv.className = "cards"
        cards.appendChild(cardDiv)
        cardDiv.append(p, input, updateButton, deleteButton, h3)
        
        quote.tags.map(tag => {
            a = document.createElement('a')
            a.innerHTML = `<a href='showTags.html?id=${tag.id}'>${tag.name}</a>`
            cardDiv.appendChild(a)
        })
    })
}

function deleteQuote(id){
    console.log('delete hit')
    fetch(`http://localhost:3000/quotes/${id}`,{
    method: 'DELETE'
    })
}

function updateQuote(id, value){
    fetch(`http://localhost:3000/quotes/${id}`,{
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body:JSON.stringify({text: value})
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
        option.type = "checkbox"
        option.value = tag.id
        tagDropdown.appendChild(option)
    })
}