const docs = [{ path: 'root/path/template.html' }]

const importTags = (function(htmlImports) {
    return htmlImports.load(docs);
}(new htmlImports));

window.addEventListener('DOMContentLoaded', importTags);
