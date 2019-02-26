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
        const tag = this.defineTag(obj);

        tag.setAttribute('async', 'async');
        tag.onload = obj.callbackLoaded;
        tag.onerror = obj.callbackError;
        document.head.appendChild(tag);
        
        return tag;
    }

    defineTag(obj){
        if(RegExp('(.html)$').test(obj.path)){
            const link = document.createElement('link');
            link.rel = 'import';
            link.href = obj.path;
        
            return link;
        }

        if(RegExp('(.js)$').test(obj.path)){
            const script = document.createElement('script');
            script.type = 'module';
            script.src = obj.path;
            
            return script;
        }

        console.error(new Error('Is expected an ".html" or ".js" file, you must be check your path definition'));
        return false;
    }
}