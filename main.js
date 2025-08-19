
document.addEventListener('click',checkTagA )

function checkTagA(obj){
    let elementHtml = obj.target
    const tag = elementHtml.tagName

    if(tag === 'A'){
        obj.preventDefault()
        checkParamtHref(elementHtml)
    }
}

function checkParamtHref(elementHtml){
    const href = elementHtml.getAttribute("href")
    insertHtml(href)
}

 async function insertHtml(href){
        try {
           let textHtml = await axios.get(href)
            textHtml = textHtml.data
            divSelect = document.querySelector('.resultado')
            divSelect.innerHTML = textHtml
           
        } catch (error) {
            console.error("Erro ao carregar o conteúdo:", error);
        }
    }



