const getCssCode = async () => {
    await chrome.storage.sync.get("cssfile", function (items) {
        var ss = document.createElement("link");
        ss.type = "text/css";
        ss.rel = "stylesheet";
        ss.href = 'data:text/css;charset=UTF-8,' + encodeURIComponent(items.cssfile)
        document.getElementsByTagName("head")[0].appendChild(ss);
    });
};

getCssCode()
