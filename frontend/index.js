
const tagDropdown = document.getElementById('tagDropdown')


fetch('http://localhost:3000/quotes')
.then(response => response.json())
.then(quotes => showQuotes(quotes))

function showQuotes(quotes){
    const cardsContainer = document.querySelector('.cards-container')
    quotes.map(quote => {
        const cardDiv = document.createElement('div')
        const input = document.createElement('input')
        const form = document.createElement('form') 
        const select = document.createElement('select')
        const tagDiv = document.createElement('div')
        const buttonDiv = document.createElement('div')
        const quoteText = document.createElement('p')
        const quoteAuthor = document.createElement('h3')
        const quoteTagselect = document.createElement('select')

        quoteTagselect.className = "CreateQuoteTagDropdown"

    fetch('http://localhost:3000/tags')
    .then(response => response.json())
    .then(tags => showTags(tags, quoteTagselect))

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
            quoteTagselect.style.display = 'block'
            form.style.display = 'block'
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




        input.name = "text"
        select.className = 'QuoteTagdd'
        
        form.className = 'addTag'
        form.method = 'POST'
        form.action = 'http://localhost:3000/quote_tags'


        quoteText.innerText = quote.text 
        quoteText.className = "quote-text"
        quoteAuthor.innerText = quote.author
        buttonDiv.className = "button-div"
        cardDiv.className = "card-div"
        tagDiv.className = "tag-div"
        cardsContainer.appendChild(cardDiv)
        buttonDiv.append(editButton, deleteButton)
        cardDiv.append(buttonDiv, quoteText, editQuoteText, quoteAuthor, editQuoteAuthor, quoteTagselect, tagDiv, editclicked)


      
        form.append(select)


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
    .then(tags => showTags(tags, tagDropdown))

function showTags(tags, parentDiv){

    const addTags = document.getElementsByClassName('QuoteTagdd')
    const tagContainer = document.getElementById('tag-container')
    tags.map(tag => {
        const allTag = document.createElement('p')
        allTag.innerHTML = `<a href='showTags.html?id=${tag.id}'>${tag.name}</a>`
        tagContainer.append(allTag)

        const option = document.createElement('option')
        option.textContent = tag.name
        option.value = tag.id
        parentDiv.append(option)

    })

}