# MapHtmlImports
Lib para auxiliar projetos a criar componentes usando html imports.

### Modo de usar

Você pode passar um array de objetos definindo o caminho de todos os templates que deseja carregar na pagina atual:

```
const docs = [{ path: 'root/path/template.html' }]

const importTags = (function(htmlImports) {
    return htmlImports.load(docs);
}(new htmlImports));

window.addEventListener('DOMContentLoaded', importTags);
```

Ou também pode especificar um unico template que será carregado:

```
const importTags = (function(htmlImports) {
    return htmlImports.createTag({ path: 'root/path/template.html' });
}(new htmlImports));

window.addEventListener('DOMContentLoaded', importTags);
```

Para recuperar os dados você pode selecionar o elemento template e então pegar o seu contúdo:

```
const template = document.querySelector(‘#myFirstWebcomponentID’);
let content = template.content;
```


Para entender melhor como Html Imports funcionam por favor acesse minha publicação no Medium: [Web Components Nativos, o que tem pra janta?](https://medium.com/@evertonthepaula/web-components-nativos-o-que-tem-pra-janta-f2706e90a673
)