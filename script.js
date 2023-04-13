const initListApp = (function () {

    let appContainer = null
    let elements = ['bromine', 'cadmium', 'lead']
    let searchPhrase = ''
    let isSearchFocused = false

    const addElement = function (newElement) {
        if (!newElement) return

        elements = elements.concat(newElement)

        searchPhrase = ''

        render()
    }

    const removeItem = function (array, indexToRemove) {

        const head = array.slice(0, indexToRemove)
        const tail = array.slice(indexToRemove + 1)

        const newArray = head.concat(tail)

        return newArray

    }

    const removeElement = function (indexToRemove) {

        elements = removeItem(elements, indexToRemove)

        render()
    }

    const elementExists = function (element) {
        return elements.includes(element)
    }

    const renderTitle = function () {

        const h2 = document.createElement('h2')
        h2.innerText = 'List of elements'

        return h2

    }

    const renderListItem = function (element, index) {

        const li = document.createElement('li')
        const button = document.createElement('button')
        const text = document.createTextNode(' ' + element)

        button.innerText = 'X'

        button.addEventListener(
            'click',
            function () {
                removeElement(index)
            }
        )

        li.appendChild(button)
        li.appendChild(text)

        return li

    }

    const renderList = function () {

        const ul = document.createElement('ul')

        for (let i = 0; i < elements.length; i++) {

            const li = renderListItem(elements[i], i)

            ul.appendChild(li)

        }

        return ul

    }

    const renderNewElementInput = function () {

        const form = document.createElement('form')

        const input = document.createElement('input')
        const button = document.createElement('button')

        input.setAttribute('placeholder', 'Add new element')
        button.innerText = 'ADD'

        form.addEventListener(
            'submit',
            function (event) {
                event.preventDefault()

                addElement(input.value)
            }
        )

        form.appendChild(input)
        form.appendChild(button)

        return form

    }

    const renderSearchInput = function () {

        const div = document.createElement('div')

        const input = document.createElement('input')

        input.setAttribute('placeholder', 'Search element')
        input.value = searchPhrase

        if (isSearchFocused) {
            setTimeout(
                function () {
                    input.focus()
                },
                0
            )
        }

        input.addEventListener(
            'input',
            function () {
                searchPhrase = input.value
                isSearchFocused = true

                render()
            }
        )

        div.appendChild(input)

        return div

    }

    const renderSearchResult = function () {

        const p = document.createElement('p')

        if (elementExists(searchPhrase)) {
            p.innerText = 'Result: search phrase found in the list'
        } else {
            p.innerText = 'Result: search phrase not found in the list'
        }

        return p

    }

    const render = function () {

        if (!appContainer) {
            appContainer = document.createElement('div')
        }

        appContainer.innerHTML = ''

        const title = renderTitle()
        const list = renderList()
        const newElementInput = renderNewElementInput()
        const searchInput = renderSearchInput()
        const searchResult = renderSearchResult()

        appContainer.appendChild(title)
        appContainer.appendChild(list)
        appContainer.appendChild(newElementInput)
        appContainer.appendChild(searchInput)
        appContainer.appendChild(searchResult)

        isSearchFocused = false

        return appContainer
    }

    const init = function (containerSelector) {
        const container = document.querySelector(containerSelector)

        if (!container) render

        const app = render()

        container.appendChild(app)
    }

    return init

})()