function template(styles, ...content) {

}

const style = `h3 {
    color: #f7df1f;
    font-size: 4rem;
    margin:0;
}`;

const template = `
    <h3>Hello world! I am a component imported by modules! :D </h3>
    <slot></slot>
`
const teste =  template`${style}${template}`;