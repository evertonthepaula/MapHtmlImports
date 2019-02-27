# MapHtmlImports
Lib para auxiliar projetos a criar componentes usando html imports.

### Modo de usar

Você pode passar um array de objetos definindo o caminho de todos os templates que deseja carregar na pagina atual:

```javascript
const docs = [{ path: 'root/path/template.html' }]

const importTags = (function(htmlImports) {
    return htmlImports.load(docs);
}(new htmlImports));

window.addEventListener('DOMContentLoaded', importTags);
```

Ou também pode especificar um unico template que será carregado:

```javascript
const importTags = (function(htmlImports) {
    return htmlImports.createTag({ path: 'root/path/template.html' });
}(new htmlImports));

window.addEventListener('DOMContentLoaded', importTags);
```

Este script espera que você esteja tentando importar apenas componentes para utilizar em sua pagina. Óbvio que é possível fazer download de qualquer tipo de template, entretanto será necessário utilizar manipulação manual para recuperar os valores de template. 

É possível recuperar os valores de seus templates tentado algo assim:

```javascript
// Selecionar o elemento import que carregou o template desejado
var link = document.querySelector('link[rel="import"]');

// Acessar o conteúdo do seu import
var content = link.import;

// Pegar o Template importado
var template = link.querySelector('template');

// Pegar o conteúdo interno do template
var content =  template.content;
    
```

Para entender melhor como Html Imports funcionam por favor acesse minha publicação no Medium: [Web Components Nativos, o que tem pra janta?](https://medium.com/@evertonthepaula/web-components-nativos-o-que-tem-pra-janta-f2706e90a673
)

#### HTML IMPORTS ARE DEPRECATED!!!! :scream:

Vamos com calma! em alguns lugares se lê que htmlImports estão "Obsoletos" que é a forma de se retratar a elementos html da especificação atual que entraram em desuso, sendo que para versões anteriores utilizamos "depreciados", entretanto, quando fui buscar as informações na W3C não encontrei nada concreto sobre isso. 

Mesmo no caso de html imports continuarem existindo como um elemento HTML, permitindo que por exemplo você carregue templates no seu documento como mostrado acima, eles não fazem mais parte da especificação de Web componets, por isto a implementação do script htmlImports foi alterada.


Continuamos importando com o mesmo script:

```javascript
const importModule = (function(htmlImports) {
    return htmlImports.createTag({ path: 'root/path/module-definition.js' });
}(new htmlImports));

window.addEventListener('DOMContentLoaded', importModule);
```

Porém mudamos a implementação do component, eu sugiro carregar na pagina o script que define o componente, este script na verdade pode ser escritp em um js comum:

```javascript
import CustomElementClassModule from './index.js'

if(!'customElements' in window) {
    console.error( new Error('Seu browser não suporta a customElements') );
}

customElements.define('custom-element-by-module', CustomElementClassModule);
```

E então este script carrega a implementação do componente em "index.js"

### Testes

Você quer testar? Eu provo que fuciona, execute: ``npm i && npm run server``, acesse: http://localhost:3000/ e veja a mágica acontecer.

Rodando teste dentro de um servidor para evitar problemas com CORS.
