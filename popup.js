const saveBtn = document.querySelector('.btn-patreon')
const inputArea = document.querySelector('.cssInput')
const siteInput = document.querySelector('.site')
const storage = window.localStorage

const restoreOptions = () => {
    var cssFileValue = storage.cssfile
    var cssFileInput
    var siteFileValue = storage.sitefile
    var siteFileInput

    if(!cssFileValue) {
        return
    }
    cssFileInput = inputArea
    cssFileInput.value = cssFileValue
    siteFileInput = siteInput
    siteFileInput.value = siteFileValue
}

const saveOptions = () => {
    var cssFileInput = inputArea
    storage.cssfile = cssFileInput.value
    var siteFileInput = siteInput
    storage.sitefile = siteFileInput.value
}

const init = () => {
    inputArea.focus()
    restoreOptions()
    saveBtn.addEventListener('click', saveOptions)
}

window.onload = init