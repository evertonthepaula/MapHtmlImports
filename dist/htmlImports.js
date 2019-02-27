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

    importAll(arrayPath) {
        return arrayPath.map(obj => this.handler(obj));
    }

    handler(obj){
        if (RegExp('(.html)$').test(obj.path)) {
            return this.import(obj);
        }

        if (RegExp('(.js)$').test(obj.path)) {
            return this.importModule(obj);
        }

        console.error(new TypeError('[HTML-Imports] - Is expected an ".html" or ".js" file, you must be check your path definition'));
        return false;
    }

    import(obj) {
        const tag = document.createElement('link');
        
        tag.rel = 'import';
        tag.href = obj.path;
        tag.setAttribute('async', 'async');
        tag.onload = obj.callbackSuccess;
        tag.onerror = obj.callbackError;
        document.head.appendChild(tag);
    
        return tag;
    }

    importModule(obj){
        const tag = document.createElement('script');

        tag.type = 'module';
        tag.src = obj.path;
        tag.setAttribute('async', 'async');
        tag.onload = obj.callbackSuccess;
        tag.onerror = obj.callbackError;
        document.head.appendChild(tag);
        
        return tag;
    }
}