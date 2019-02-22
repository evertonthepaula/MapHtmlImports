class CustomElementClass02 extends HTMLElement
{
    constructor()
    {
        super();
        const template = document.currentScript.ownerDocument.querySelector('template');
        const dataMode = this.dataset.mode;
        const shadowRoot = this.attachShadow({mode: dataMode});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

if(!'customElements' in window) {
    console.error( new Error('Seu browser não suporta a customElements') );
}

customElements.define('custom-element02', CustomElementClass02);