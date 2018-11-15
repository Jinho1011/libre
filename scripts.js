// All DOM manipulation must exist inside this "content script" in order to execute in the proper context of the page

// inject the css file into the head element
function appendStyleNode(id, href) {
    var cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.id = id;
    cssNode.href = href;
    document.getElementsByTagName('head')[0].appendChild(cssNode);
}