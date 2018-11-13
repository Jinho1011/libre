const saveBtn = document.querySelector('.btn-patreon')
const inputArea = document.querySelector('.cssInput')
const storage = window.localStorage

const restoreOptions = () => {
    var cssFileValue = storage.cssfile,
        cssFileInput
    if(!cssFileValue) {
        return
    }
    cssFileInput = inputArea
    cssFileInput.value = cssFileValue
}

const saveOptions = () => {
    var cssFileInput = inputArea
    storage.cssfile = cssFileInput.value
}

const init = () => {
    inputArea.focus()
    restoreOptions()
    saveBtn.addEventListener('click', saveOptions)
}

window.onload = init