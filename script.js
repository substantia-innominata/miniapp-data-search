let elements = []

const addElement = function (newElement) {
   elements = elements.concat(newElement)
}

const searchElement = function (element) {
    return elements.includes(element)
}

