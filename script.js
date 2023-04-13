let appContainer = null
let elements = ['bromine', 'cadmium', 'lead']

const addElement = function (newElement) {
    elements = elements.concat(newElement)

    render()
}

const searchElement = function (element) {
    return elements.includes(element)
}

const renderList = function () {

    const ul = document.createElement('ul')

    for (let i = 0; i < elements.length; i++) {

        const li = document.createElement('li')

        li.innerText = elements[i]

        ul.appendChild(li)

    }

    return ul

}

const renderNewElementInput = function () {

    const div = document.createElement('div')

    const input = document.createElement('input')
    const button = document.createElement('button')

    input.setAttribute('placeholder', 'Add new element')
    button.innerText = 'ADD'

    button.addEventListener(
        'click',
        function () {
            addElement(input.value)
        }
    )

    div.appendChild(input)
    div.appendChild(button)

    return div

}

const renderSearchInput = function () {

    const div = document.createElement('div')

    const input = document.createElement('input')

    input.setAttribute('placeholder', 'Search element')

    div.appendChild(input)

    return div

}

const renderSearchResult = function () {

    const p = document.createElement('p')

    p.innerText = 'Result'

    return p

}


const render = function () {

    if (!appContainer) {
        appContainer = document.createElement('div')
    }

    appContainer.innerHTML = ''

    const list = renderList()
    const newElementInput = renderNewElementInput()
    const searchInput = renderSearchInput()
    const searchResult = renderSearchResult()

    appContainer.appendChild(list)
    appContainer.appendChild(newElementInput)
    appContainer.appendChild(searchInput)
    appContainer.appendChild(searchResult)

    return appContainer
}

const init = function (containerSelector) {
    const container = document.querySelector(containerSelector)

    if (!container) render

    const app = render()

    container.appendChild(app)
}

init('body')
