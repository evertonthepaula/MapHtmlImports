class htmlImports {
    constructor() {
        this.testSupport();
    }

    testSupport() {
        if (!'import' in document.createElement('link')) {
            console.error(new Error('Your browser doesn’t support HTML Imports.'));
            return false;
        }
    }

    load(arrayPath) {
        return arrayPath.map((obj) => this.createTag(obj));
    }
 
    createTag(obj) {
        const tag = document.createElement('link');
        tag.rel = 'import';
        tag.href = obj.path;
        tag.setAttribute('async', 'async');
        tag.onload = function(e) { console.log('deu certo!')};
        tag.onerror = function(e) { console.log('ZICOU!');};
        document.head.appendChild(tag);
        return tag;
    }
}