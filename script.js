let elements = [bromine, cadmium, lead]

const addElement = function (newElement) {
   elements = elements.concat(newElement)
}

const searchElement = function (element) {
    return elements.includes(element)
}

const renderList = function(){}
const renderNewElementInput = function(){}
const renderSearchInput = function(){}
const renderSearchResult = function(){}


const render = function () {

    const div = document.createElement('div')

    const list = renderList
    const newElementInput = renderNewElementInput
    const searchInput = renderSearchInput
    const searchResult = renderSearchResult

    div.appendChild(list)
    div.appendChild(newElementInput)
    div.appendChild(searchInput)
    div.appendChild(searchResult)

    return div
}

const init = function (containerSelector) {
    const container = document.querySelector(containerSelector)
    
    if(!container) render
    
    const app = render()

    container.appendChild(app)
}

