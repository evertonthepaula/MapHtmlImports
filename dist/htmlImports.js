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
        tag.onload = obj.callBackSuccess;
        tag.onerror = obj.callBackError;
        document.head.appendChild(tag);
        return tag;
    }
}