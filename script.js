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

    const elementExists = function (element) {
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

        const list = renderList()
        const newElementInput = renderNewElementInput()
        const searchInput = renderSearchInput()
        const searchResult = renderSearchResult()

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