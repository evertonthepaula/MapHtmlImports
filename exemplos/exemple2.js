const importTags = (function(htmlImports) {
    return htmlImports.createTag({ path: 'root/path/template.html' });
}(new htmlImports));

window.addEventListener('DOMContentLoaded', importTags);
