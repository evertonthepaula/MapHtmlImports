import CustomElementClassModule from './index.js'

if(!'customElements' in window) {
    console.error( new Error('Seu browser não suporta a customElements') );
}

customElements.define('custom-element-by-module', CustomElementClassModule);