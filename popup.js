const saveBtn = document.querySelector('.saveBtn')
const inputArea = document.querySelector('.cssInput')
const darkMode = document.querySelector('.template-dark')
const palenightMode = document.querySelector('.template-palenight')
const storage = window.localStorage

const restoreOptions = () => {
    var cssFileValue
    chrome.storage.sync.get("cssfile", function (items) {
        cssFileValue = items
    })
    var cssFileInput

    if (!cssFileValue) {
        return
    }
    cssFileInput = inputArea
    cssFileInput.value = cssFileValue
}

const saveOptions = () => {
    var cssFileInput = inputArea;
    chrome.storage.sync.set({ "cssfile": cssFileInput.value }, function () {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    })
}

const init = () => {
    inputArea.focus()
    restoreOptions()
    saveBtn.addEventListener('click', saveOptions)
}

const handleDarkMode = () => {
    darkModeCss = 'body{background:#2C3A47 !important; color: white !important;}'
    chrome.storage.sync.set({ "cssfile": darkModeCss  }, function () {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    })
}

const handlepalenightMode = () => {
    palenightModeCss = 'body{background:#0a3d62 !important; color: white !important;}'    
    chrome.storage.sync.set({ "cssfile": palenightModeCss }, function () {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    })
}

darkMode.addEventListener("click", handleDarkMode)
palenightMode.addEventListener("click", handlepalenightMode)

window.onload = init