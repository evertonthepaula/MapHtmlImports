const templateString = `
    <style>
        h3{
            color: #f7df1f;
            font-size: 4rem;
            margin:0;
        }
    </style>

    <h3>Hello world! I am a component imported by modules! :D </h3>
    <slot></slot>
`;

export default class CustomElementClassModule extends HTMLElement
{
    constructor()
    {
        super();
        const template = templateString;
        const dataMode = this.dataset.mode;
        const shadowRoot = this.attachShadow({mode: dataMode});
        shadowRoot.innerHTML = template;
    }
}