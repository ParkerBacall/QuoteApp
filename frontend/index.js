
fetch('http://localhost:3000/quotes')
.then(response => response.json())
.then(quotes => showQuotes(quotes))
.catch(error => console.log(error))

function showQuotes(quotes){
    const cardsContainer = document.querySelector('.cards-container')
    
    quotes.map(quote => {
        const cardDiv = document.createElement('div')
        const input = document.createElement('input')
        const form = document.createElement('form') 
        const select = document.createElement('select')
        const submit = document.createElement('input')
        const tagDiv = document.createElement('div')
        const buttonDiv = document.createElement('div')
        const quoteText = document.createElement('p')
        const quoteAuthor = document.createElement('h3')

        const quoteTagselect = document.createElement('select')

        quoteTagselect.className = "CreateQuoteTagDropdown"
        quoteTagselect.multiple = "multiple"
        quoteTagselect.name = "tag_ids[]"

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
        editQuoteText.defaultValue = quote.text
        editQuoteText.className = "edit-quote-text"

        const editQuoteAuthor = document.createElement('input')
        editQuoteAuthor.name = "text"
        editQuoteAuthor.defaultValue = quote.author
        editQuoteAuthor.className = "edit-quote-author"

        editButton.addEventListener('click', ()=>{
           if(editQuoteText.style.display === 'none'){
            editQuoteText.style.display = 'block'
            editclicked.style.display = 'block'
            quoteText.style.display = 'none'

            quoteTagselect.style.display = 'block'
            editQuoteAuthor.style.display = 'block'
            quoteAuthor.style.display = 'none'
           } else {
            editQuoteText.style.display = 'none'
            editclicked.style.display = 'none'
            quoteText.style.display = 'block'
            quoteTagselect.style.display = 'none'
            editQuoteAuthor.style.display = 'none'
            quoteAuthor.style.display = 'block'
           }
            


            editclicked.addEventListener('click', ()=>{
                editQuote(quote.id, editQuoteText.value, editQuoteAuthor.value,  getSelectValues(quoteTagselect))
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


        quoteText.innerText = quote.text 
        quoteText.className = "quote-text"
        quoteText.placeholder = quote.text 

        quoteAuthor.innerText = quote.author
        quoteAuthor.placeholder = quote.author
        buttonDiv.className = "button-div"
        cardDiv.className = "card-div"
        tagDiv.className = "tag-div"
        cardsContainer.appendChild(cardDiv)
        buttonDiv.append(editButton, deleteButton)
        cardDiv.append(buttonDiv, quoteText, editQuoteText, quoteAuthor, editQuoteAuthor, tagDiv, editclicked)

      
        form.append(select, submit)


        quote.tags.map(tag => {
            const a = document.createElement('a')
            const tagDelete = document.createElement('button')
            const tagDeleteDiv = document.createElement('div')
            tagDelete.textContent = 'x'
            tagDelete.className = 'tagDelete'
            a.innerHTML = `<a href='showTags.html?id=${tag.id}'>${tag.name}</a>`
            a.appendChild(tagDelete)
            tagDiv.appendChild(a)
            
        })

    })
}

function deleteQuote(id){
    fetch(`http://localhost:3000/quotes/${id}`,{
    method: 'DELETE'
    })
}

function editQuote(id, quoteText, quoteAuthor, quoteTag){
    fetch(`http://localhost:3000/quotes/${id}`,{
    method: 'PATCH',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body:JSON.stringify({text: quoteText, author: quoteAuthor, tag_ids: quoteTag})
    })
 window.location.reload()
}

fetch('http://localhost:3000/tags')
    .then(response => response.json())
    .then(tags => showTags(tags, tagDropdown))
    .then(response => response.json())
    .then(tags => bottomLinks(tags))
    .catch(error => console.log(error))

function showTags(tags){
    const tagDropdown = document.getElementById('tagDropdown')

    const addTags = document.getElementsByClassName('QuoteTagdd')

    tags.map(tag => {
        const option = document.createElement('option')
        const addOption = document.createElement('option')
        option.textContent = tag.name

        addOption.textContent = tag.name
        option.type = "checkbox"
        option.value = tag.id
        addOption.value = tag.id
        tagDropdown.appendChild(option)


    })
    return fetch("http://localhost:3000/tags")
}

function bottomLinks(tags){
    const tagContainer = document.getElementById('tag-container')
    tags.map(tag => {
    
        const allTag = document.createElement('p')
        allTag.innerHTML = `<a href='showTags.html?id=${tag.id}'>${tag.name}</a>`
        tagContainer.append(allTag)
    })
}




function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

