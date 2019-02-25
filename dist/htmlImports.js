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
        tag.onload = function (e) { console.log('%c DEU CERTO!!!', 'font-weight: bold; font-size: 40px;color: red; padding-bottom: 24px; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'); };
        tag.onerror = function (e) { console.warn('ZICOU!'); };
        document.head.appendChild(tag);

        return tag;
    }

    defineTag(obj) {
        if (RegExp('(.html)$')) {
            const link = document.createElement('link');
            link.rel = 'import';
            link.href = obj.path;

            return link;
        }

        if (RegExp('(.js)$')) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = obj.path;

            return script;
        }

        console.error(new Error('Is expected an ".html" or ".js" file, you must be check your path definition'));
        return false;
    }
}