export function textOverflowHandler(element) {
	 let isOverFlowing = false
    while (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
        isOverFlowing = true
        if (element.lastElementChild && element.lastElementChild.nextSibling === null) {
            if (element.lastElementChild.textContent !== "") {
                element.lastElementChild.textContent = element.lastElementChild.textContent.slice(0, -1)
            } else if (element.lastElementChild.textContent === "") {
                element.removeChild(element.lastElementChild)
            }
        } else if (element.lastElement !== null) {
            element.innerHTML = element.innerHTML.slice(0, -1)
        }

    }
    if (element.lastElementChild && element.lastElementChild.nextSibling === null) {
        if (element.lastElementChild.textContent !== '') {
            element.lastElementChild.textContent = element.lastElementChild.textContent.slice(0, -3)
            element.lastElementChild.textContent = element.lastElementChild.textContent + "..."
        } else if (element.lastElementChild.textContent === "") {
            element.removeChild(element.lastElementChild)
            element.lastElementChild.textContent = element.lastElementChild.textContent.slice(0, -3)
            element.lastElementChild.textContent = element.lastElementChild.textContent + "..."
        }
    } else if (element.lastElementChild !== null && element.lastElementChild.nextSibling !== null) {
        element.innerHTML = element.innerHTML.slice(0, -3)
        element.innerHTML = element.innerHTML + "..."
    } else if (isOverFlowing) {
        element.innerHTML = element.innerHTML.slice(0, -3)
        element.innerHTML = element.innerHTML + "..."
    }
