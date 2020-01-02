
fetch('http://localhost:3000/quotes')
.then(response => response.json())
.then(quotes => showQuotes(quotes))
.catch(error => console.log(error))

function showQuotes(quotes){
    const cardsContainer = document.querySelector('.cards-container')
    quotes.map(quote => {
        const cardDiv = document.createElement('div')

        const p = document.createElement('p')
        const h3 = document.createElement('h3')
        const input = document.createElement('input')
        const form = document.createElement('form') 
        const select = document.createElement('select')
        const submit = document.createElement('input')
        const tagDiv = document.createElement('div')
        const buttonDiv = document.createElement('div')
        const quoteText = document.createElement('p')
        const quoteAuthor = document.createElement('h3')

        const editButton = document.createElement('button')
        editButton.textContent = ""
        editButton.className = "edit-button"
        const editclicked = document.createElement('button')
        editclicked.textContent = "Submit"
        editclicked.className = "editclicked"
        const editQuoteText = document.createElement('input')
        editQuoteText.name = "text"
        editQuoteText.placeholder = quote.text
        editQuoteText.className = "edit-quote-text"

        const editQuoteAuthor = document.createElement('input')
        editQuoteAuthor.name = "text"
        editQuoteAuthor.placeholder = quote.author
        editQuoteAuthor.className = "edit-quote-author"

        editButton.addEventListener('click', ()=>{
            editQuoteText.style.display = 'block'
            editclicked.style.display = 'block'
            quoteText.style.display = 'none'
            editQuoteAuthor.style.display = 'block'
            quoteAuthor.style.display = 'none'

            editclicked.addEventListener('click', ()=>{
                editQuote(quote.id, editQuoteText.value, editQuoteAuthor.value)
            })
        })

        const deleteButton = document.createElement('button')
        deleteButton.textContent = ""
        deleteButton.className = "delete-button"

        deleteButton.addEventListener('click', ()=>{
            event.target.parentNode.parentNode.remove()
            deleteQuote(quote.id)
        })

        quoteText.innerText = quote.text 
        quoteText.className = "quote-text"
        quoteAuthor.innerText = quote.author
        buttonDiv.className = "button-div"
        cardDiv.className = "card-div"
        tagDiv.className = "tag-div"
        cardsContainer.appendChild(cardDiv)
        buttonDiv.append(editButton, deleteButton)
        cardDiv.append(buttonDiv, quoteText, editQuoteText, quoteAuthor, editQuoteAuthor, tagDiv, editclicked)


        input.name = "text"
        submit.type = 'submit'

        select.className = 'QuoteTagdd'
        
        form.method = 'POST'
        form.action = 'http://localhost:3000/quote_tags'

        p.innerText = quote.text 
        h3.innerText = quote.author
        cardDiv.className = "cards"
        cards.appendChild(cardDiv)
        cardDiv.append(p, input, updateButton, deleteButton, h3)
        form.append(select, submit)
        quote.tags.map(tag => {
            a = document.createElement('a')
            a.innerHTML = `<a href='showTags.html?id=${tag.id}'>${tag.name}</a>`
            cardDiv.append(a, form)
        quote.tags.map(tag => {
            a = document.createElement('a')
            a.innerHTML = `<a href='showTags.html?id=${tag.id}'>${tag.name}</a>`
            tagDiv.appendChild(a)

        })
    })
}

function deleteQuote(id){
    fetch(`http://localhost:3000/quotes/${id}`,{
    method: 'DELETE'
    })
}

function editQuote(id, quoteText, quoteAuthor){
    fetch(`http://localhost:3000/quotes/${id}`,{
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body:JSON.stringify({text: quoteText, author: quoteAuthor})
    })

}

fetch('http://localhost:3000/tags')
    .then(response => response.json())
    .then(tags => showTags(tags))


function showTags(tags){
    const tagDropdown = document.getElementById('tagDropdown')

    const addTags = document.getElementsByClassName('QuoteTagdd')
    const tagContainer = document.getElementById('tag-container')

    tags.map(tag => {
        const allTag = document.createElement('p')
        allTag.innerHTML = `<a href='showTags.html?id=${tag.id}'>${tag.name}</a>`
        tagContainer.append(allTag)

        const option = document.createElement('option')
        const addOption = document.createElement('option')
        option.textContent = tag.name

        addOption.textContent = tag.name
        option.type = "checkbox"
        option.value = tag.id
        addOption.value = tag.id
        tagDropdown.appendChild(option)

        option.value = tag.id
        tagDropdown.append(option)

    })
}
