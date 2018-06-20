# [Functional Programming For Beginners with JavaScript](https://www.udemy.com/functional-programming-for-beginners-with-javascript) por [James Moore](https://twitter.com/uknowthen)

## [1. What Is An Application?](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9267880)

* Existem **milhões** de *aplicativos web*, *mobile* e *desktop*.
* Eles parecem diferentes, mas eles são **mais parecidos** do que imaginamos.
* Você consegue dizer como um aplicativo se parece?
* Os aplicativos possuem uma **estrutura em comum** ou um **esqueleto**.
* Devemos focar **naquilo que importa** ao construir um aplicativo.
* Os aplicativos são formados por **dados** e **listas de dados**.
* Mas *dados* e *lista de dados* não são suficientes para **representar um aplicativo**.
* Os *dados* e *lista de dados* devem ser exibidos de uma forma que possam ser de **fácil consumo** e que **permitam interações**.
* Em resumo, podemos dizer que um **aplicativo** é composto de **(1)** dados, **(2)** lista de dados e **(3)** transformação dos dados (em informações de fácil consumo).

## [2. What We'll Be Building in This Course](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270624)

* Recomenda-se **aprender de forma prática**, ou seja, criando diversos aplicativos.
* Com muita prática conseguimos alcançar a **perfeição**.
* E conseguimos isso através da **repetição espaçada** e a **intercalação** de conceitos relacionados.
* A **repetição espaçada** permite o aprendizado de conceitos de forma que precisamos revisitá-lo regularmente exercitando o uso de nossa memória e torna melhor a **compreensão do conceito**.
* A **repetição espaçada** permite **corrigir erros anteriores** e **alcançar uma melhor perícia** nas tarefas.
* A **perícia** ou **maestria** nos permite realizar tarefas de maneira natural e sem pensar.
* Aprender a aprender é a **melhor habilidade** que se poder ter como desenvolvedor de software.
* Um desenvolvedor de software sempre precisará **aprender coisas novas**.
* Ao criar um novo aplicativo **(1)** tente não ser ambicioso (existe um risco ao tentar criar algo muito grande e acabar desistindo) e **(2)** diga o que será criado para 2 pessoas (isso tornará a sua ideia mais real e fará com que você evite desistir).

## [3. What Technologies Will We Be Using?](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270634)

* Será utilizado o JavaScript que trata-se de uma linguagem **amplamente utilizada**.
* O JavaScript suporta o estilo de **progração funcional**.
* Não será utilizado frameworks como Angular, React ou Vue.
* Os **conceitos** de programação funcional **trancendem** qualquer tecnologia ou framework e pode ser utilizado tanto no front-end quanto no back-end.
* A utilização de framework pode **desviar a atenção** para conceitos importantes que devem ser aprendidos.
* Será utilizado o abordagem **bottom-up**, ou seja, para aprender programação funcional as peças de sua aplicação serão criadas do zero.
* Pode-se utilizar frameworks, mas o **objetivo** é reforçar o conhecimento de programação e é melhor fazê-lo sem ferramentas externas.
* Algumas **bibliotecas externas** serão utilizadas para facilitar a evolução da aplicação e evitar perda de tempo.

## [4. Who Should Take This Course?](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270636)

* Ao **começar a aprender** programação funcional nos deparamos com termos como *functors*, *monads* e *algebraic data types*.
* Esses termos parecem um **idioma estranho**, soa **muito acadêmico** e pode nos levar a **desistir de aprendê-lo**.
* Porém, o **paradigma orientado a objetos** também é bastante complicado e pode nos desmotivar.
* Ainda assim, a **programação funcional** possui um **jargão técnico** bastante complicado.
* Contudo, recentemente, a **programação funcional** passou a ganhar mais espaço na *indústria de software* e **conteúdo** com menos jargão técnico foi ganhando mais espaço.
* É fácil **ficar confuso** ao aprender programação funcional. Mas **não precisa** ser assim.
* É importante mostrar a **essência** da programação funcional e como ela pode ser aplicada sem ser um mestre em matemática.

## [5. How to Get Help](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270642)

* Devemos deixar o orgulho de lado e **procurar ajuda** para os problemas em desenvolvimento de software.
* Todo mundo faz **escolhas erradas** ou tem **gaps de conhecimento**.
* O **código do projeto** pode ser encontrado em github.com/knowthen/fpjs.

## [6. You're Probably Doing It Wrong](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270650)

* Não se deve querer **aprender tudo** sobre uma coisa de uma só vez.
* Devemos ter o **Princípio de Pareto** em mente e saber que **80% do código** em JavaScript utiliza apenas **20% das funcionalidades**.
* Recomenda-se aprender os **20% mais importante** com **maestria** e aprender os **80% restantes** quando **necessário**.
* Recomenda-se **estudar** o código-fonte de **outros programadores**.
* Ao ler código de desenvolvedores experientes **evita-se os erros** cometidos por ele e **obtém-se insights** em minutos o que ele demorou meses ou anos para aprender.
* Recomenda-se utilizar a **repetição espaçada** para te ajudar no aprendizado.

## [7. Getting Started With JavaScript](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270654)

* Pode-se **utilizar o JavaScript** no navegador, no lado do servidor ou em dispositivos de IoT.
* Pode-se utilizar também para criar **aplicativos nativos** para smartphones ou desktop.
* O JavaScript está **em todo lugar** e é, com grance certeza, a linguagem **mais popular** e mais **largamente utilizada** no mundo.
* A **maioria dos programadores** devem/deveriam aprender JavaScript.
* O **conceitos** que serão aprendidos poderão ser utilizados em várias linguagens.
* Um arquivo JavaScript pode ser executado em uma **aplicação web** através da tag script **diretamente no código** ou referenciando um **arquivo externo**.

## [8. Primitive Data Types](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270656)

* Os **dados** são um dos **blocos de construção** dos aplicativos.
* O **String** é um **tipo de dados primitivo** em JavaScript, ou seja, não pode ser quebrado em outros tipos.
* **Number** e **Boolean** também são **tipos de dados primitivo** em JavaScript.
* Define-se uma "variável" em JavaScript utilizando `const` como em `const calories = 180`.
* Um dos principais **princípios de programação funcional** são **dados imutáveis**, ou seja, *dados que não são alterados*.
* Existem as palavras-chaves `var` e `let` para a definição de variáveis em JavaScript, mas elas **não são utilizadas** em programação funcional.
* Em JavaScript, os **tipos das variáveis** são definidos **ao avaliar** o valor da variável, ou seja, é feito de forma implícita.
* Os **operadores** operam diferentemente de acordo com os tipos. O operador `+` é utilizado para **somar valores** do **tipo numérico** ou para **concatenar strings** do **tipo texto**.

## [9 - Object Types](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270664)

* A **estrutura de dados** utilizada para **agrupar valores relacionados** é chamada de **objeto literal**.
* O **objeto** é um **tipo de dado complexo**.
* O termo **objeto** remete à **programação orientada a objetos** e, para não causar confusão, pode-se utilizar o termo **registro** no contexto de **programação funcional**.
* Pode-se acessar a **propriedade** de um objeto utilização a **notação de ponto**.
* Ao tentar acessar uma **propriedade inexistente** de um objeto, o valor `undefinded` será retornado.
* `undefined` trata-se de um **tipo primitivo** em JavaScript.
* O `undefined` geralmente é causado por algum **problema na lógica**.
* Para representar **datas** em JavaScript utiliza-se o tipo `Date`.

## [10. Arrays](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270672)

* Um **array** é uma estrutura de dados que representa uma **lista de valores** de *quaisquer tipos de dados*.
* Ao acessar um **índice inexistente** de um array será retornado `undefined`.

## [11. Functions](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270674)

* Uma **função** permite criar uma **lógica reutilizável** ou **transformar valores** de um tipo em outro tipo.

## [12. Immutable Data](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270680)

* Um **dado imutável** é um dado que não muda depois que foi criado.
* Uma `String` é um tipo de dado imutável.
* Recomenda-se evitar **dados mutáveis**.
* Os *dados imutáveis* são **mais simples** que os *dados imutáveis*.
* Ao utilizar dados imutáveis não precisa se **preocupar** ao passá-los para uma *função de terceiros*.
* Isso permite **maior confiança** e **evita que erros** ocorram.
* O **simples** leva a um **código menos complicado** que leva a **menos bugs** que é **fácil de entender, testar e manter**.
* Não confundir simples com fácil.
* Criar **código simples** não é fácil, é difícil.
* O JavaScript não possui suporte à **tipos de dados imutáveis**.
* O JavaScript **não lida muito bem** com dados imutáveis. Ele permite, por exemplo, **alterar uma propriedade** de um objeto que foi definido utilizando `const`.
* A palavra-chave `const` previne contra uma **reatribuição**.

## [13. Updating Objects, In An Immutable Way](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270688)

* O **estado** é o que o seu *programa se lembra*.
* O **estado** é algo que *acontece ao longo do tempo* que o seu *programa se lembra ou acompanha*.
* Operações como *incluir*, *alterar* e *apagar* refere-se a **manutenção de estado** da sua aplicação.
* Se em programação funcional fala-se em **dados imutáveis**, como é que é feita a **manutenção de estado**?
* Todo programa possui **estado**.
* O estado são **dados** que são *alterados* ou *mutados*.
* Entender a relação entre **manter estados** e **dados imutáveis** é o coração da programação funcional.
* É importante conhecer como realizar a **manipulação de objetos** de uma **forma imutável**.
* Pode-se **adicionar uma propriedade** em um objeto de **forma imutável** criando um *novo objeto* com a *nova propriedade* e **copiar os valores** das propriedades do *objeto antigo* para as propriedades do *objeto novo*.
```javascript
// 01 - Adding a new property in an immutable way
// approach 1 - copying the old properties

const person = {
    id: 1,
    name: 'John',
};

const updatedPerson = {
    id: person.id,
    name: person.name,
    age: 25,
};

console.log(person, updatedPerson);
```
* A abordagem de **copiar os valores** das propriedades do objeto antigo para as propriedades do objeto novo é **bastate verbosa**.
* Outra abordagem para **adicionar uma propriedade** em um objeto de **forma imutável** é criando um *novo objeto* com a *nova propriedade* e utilizar o ***spread operator*** para **copiar as propriedades e valores** do *objeto antigo* para o *objeto novo*.
```javascript
// 02 - Adding a new property in an immutable way
// approach 2 - using spread operator

const person = {
    id: 1, 
    name: 'John',
};

const updatedPerson = {
    ...person,
    age: 25,
};

console.log(person, updatedPerson);
```
* O ***spread operator*** `...` é uma funcionalidade recente do JavaScript mas que pode ser utilizada com tranquilidade pois possui **suporte de transpilers** como o Babel.
* O ***spread operator*** faz com que as **propriedades** do *objeto original* sejam **injetadas** no *novo objeto*.
* É possível também **atualizar o valor** de uma propriedade do *objeto original* no *novo objeto*.
```javascript
// 03 - Updating a property in an immutable way (using spread operator)

const person = {
    id: 1, 
    name: 'John',
};

const updatedPerson = {
    ...person,
    name: 'Bob',
    age: 25,
};

console.log(person, updatedPerson);
```
* Pode-se **remover uma propriedade** de um objeto de **forma imutável** através de ***destructuring assignment***.
```javascript
// 04 - Example how destructuring assignment works

const id = updatedPerson.id;
const name = updatedPerson.name;

const {id, name} = updatedPerson;

console.log(id, name);
```
* Ao utilizar o ***destructuring assignment*** torna o seu código **mais conciso**.
* O ***destructuring assignment*** permite que as propriedades de objetos sejam **desempacotadas** e **atrbuídas** à variáveis.
```javascript
// 05 - Removing a property in an immutable way (using destructuring assignment)

const {id, ...personWithoutId} = updatedPerson;

console.log(personWithoutId);
```
* A notação `...` faz **coisas diferentes** dependendo de onde é utilizado.
* Ela pode ser utilizada para **expandir as propriedades** de um *objeto original* em um *novo objeto*.
* Essa operação é conhecida como ***spread*** e é utilizada do **lado direito** da atribuição.
* A operação de ***destructuring*** é utilizada do **lado esquerdo** da atribuição e é utilizada para **coletar informações**.

## [14. Updating Arrays, In An Immutable Way](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270690)

* Pode-se **adicionar um item** em um array de **forma imutável** utilizando o ***spread operator***.
```javascript
// 01. Adding an item into an array in an immutable way (using spread operator)

const people = [
    {id: 1, name: 'Alice', age: 23},
    {id: 2, name: 'Bob', age: 25},
];

const person = {
    id: 3, 
    name: 'Clara', 
    age: 19,
};

const updatedPeople = [...people, person];

console.log(people, updatedPeople);
```
* O arrays em JavaScript possuem a função `map` que permite realizar a **transformação** de cada um dos itens do array resultando em um **novo array**.
```javascript
// 02 - mapping an array doubling each item

const numbers = [1, 2, 3];

function double(number) {
    return number * 2;
}

const doubledNumbers = numbers.map(double);

console.log(numbers, doubledNumbers);
```
* Em JavaScript, uma **função** também é um **valor** como *números*, *strings*, *booleanos* e *objetos*, ou seja, uma função pode ser *passada como parâmetro*, *atribuída a uma variável* e *retornada em uma chamada de função*.
* As funções são consideradas cidadãs de **primeira classe** em JavaScript.
* Para **atualizar um item de um array** de **forma imutável** utiliza-se a **função `map`** de um array.
```javascript
// 03. Updating an item from an array in an immutable way (using map function)

const people = [
    {id: 1, name: 'Alice', age: 23},
    {id: 2, name: 'Bob', age: 25},
    {id: 3, name: 'Clara', age: 19},
];

const updatedPeopleName = people.map(updateName);

function updateName(person) {
    if (person.id === 2) {
        return {
            ...person,
            name: 'Bill',
        };
    }
    return person;
}

console.log(people, updatedPeopleName);
```
* O arrays em JavaScript possuem a função `filter` que permite realizar a **filtragem** de itens de um array resultando em um **novo array**.
* Para **remover um item de um array** de **forma imutável** utiliza-se a **função `filter`** de um array.
```javascript
// 04. Removing an item from an array in an immutable way (using map function)

const people = [
    {id: 1, name: 'Alice', age: 23},
    {id: 2, name: 'Bob', age: 25},
    {id: 3, name: 'Clara', age: 19},
];

const removedPeople = people.filter(function(person) {
    return person.id !== 1;
});

console.log(people, removedPeople);
```

## [15. Summarize Information In An Array](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270694)

* Pode-se utilizar a função `reduce` do JavaScript para realizar operações sobre um array como uma **somatória** ou o **agrupamento de valores**.
```javascript
// 01 - using reduce function to obtain the total

const numbers = [1, 2, 3];

function sum (x, y) {
    return x + y;
}

const total = numbers.reduce(sum);

console.log(total);
```
* Deve-se passar como argumento da função `reduce` uma **função de callback**.
* O primeiro argumento da função de callback é o **valor acumulado** e o segundo argumento é **valor** do item atual do array.
* Como *segundo argumento* da função `reduce` pode-se passar um valor inicial como **acumulador**.
* O **valor do acumulador** pode ser de **qualquer tipo**.
```javascript
// 02 - using reduce function to group some values

const grades = [60, 55, 80, 90, 99, 92, 75, 72];

const letterGradeCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc, grade) {
    const {a = 0, b = 0, c = 0, d = 0, f = 0} = acc;
    if (grade >= 90) {
        return {...acc, a: a + 1};
    } else if (grade >= 80) {
        return {...acc, b: b + 1};
    } else if (grade >= 70) {
        return {...acc, c: c + 1};
    } else if (grade >= 60) {
        return {...acc, d: d + 1};
    } else {
        return {...acc, f: f + 1};
    }
}

console.log(letterGradeCount);
```

## [16. Introduction to Currying](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270710)

* Uma **função** é um valor como outro qualquer em JavaScript, ou seja, pode ser **passada como argumento** ou **retornada em uma chamada de função**.
* Uma função que pode ser *passada como argumento* ou *retornada em uma chamada de função* é conhecida como **função de alta ordem**.
* Uma **closure** é uma função que possui acesso ao **escopo externo**.
```javascript
// 01 - understading concepts like high-order functions and closures

function greet(greeting) {
    return function (name) {
        return `${greeting} ${name}`;
    };
}

console.log(greet('Good Morning')('John'));

const friends = ['Alice', 'Bob', 'Carol', 'Dan'];

const friendGreetings = friends.map(greet('Good Morning'));

console.log(friendGreetings);
```

## [17. Currying and Partial Application](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270714)

* O ***currying*** é a técnica que permite *transformar uma função* que recebe **múltiplos argumentos** em *uma função* que recebe apenas **um argumento** e que *retorna uma função* que aceita os **argumentos restantes**.
* A **aplicação parcial** é quando se executa uma função e passa apenas **parte de seus argumentos**.
* A **aplicação parcial** permite fazer a **especialização** de uma *função mais genérica*.
* Pode-se diferenciar **currying** de **aplicação parcial** da seguinte maneira:
    * **currying** 
        * é o que se faz quando se *projeta uma função*
        * relacionado com a **criação da função**
        * não relacionado com **dados**
    * **aplicação parcial** 
        * é o que se faz quando se *utiliza a função*
        * relacionado com a **utilização da função**
        * relacionado com **dados**
* Pode-se utilizar uma função que permite realizar a **aplicação parcial** em uma função que não é *curried*.
```javascript
// 01 - using a helper function that allows to perform
// partial application in a regular not curried function

function add(x, y) {
    return x + y;
}

const add3 = partial(add, [3]);

console.log(add3(2)); // 5
```
* Na programação funcional utiliza-se **currying** e **aplicação parcial** a todo momento.
* Na programação funcional deve-se levar em consideração a **ordem dos parâmetros**.
* Os parâmetros mais **genéricos** devem vir *mais para o início* e os parâmetros mais **específicos** devem vir *mais para o final*.
* Recomenda-se deixar o parâmetro sobre qual uma **função opera** mais para o final.
* O JavaScript não possui **suporte nativo** para **currying** como nas *linguagens puramente funcionais* Elm ou Haskell.
* A biblioteca Ramda.js possui **inúmeras funcionalidades** relacionadas a programação funcional.
* Pode-se criar funções em JavaScript utilizando uma **sintaxe alternativa** conhecida por ***fat arrow*** ou **lambda**.
```javascript
// 02. using fat arrow syntax to define a function
// and currying some functions using Ramda.js

// uncurried function
// const greet = (greeting, name) => `${greeting} ${name}`;

// curried function using Ramda.js
const greet = R.curry((greeting, name) => `${greeting} ${name}`);

console.log(greet('Good Morning')('Alice'));
console.log(greet('Good Morning', 'Alice'));

// specialized version of `greet` function partially applied
const greetGoodMorning = greet('Good Morning');

console.log(greetGoodMorning('Bob'));
```
* A biblioteca Ramda.js possui **diversas funções** e todas são ***curried* por padrão**.
* A biblioteca Ramda.js não **muda nenhum dado**.

## [18. Pure Functions](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270718)

* O que mais será feito ao programar utilizando programação funcional vai ser a **transformação de dados** através de **funções**.
* Existem as **funções puras** e as **funções impuras**.
* As **funções impuras** podem ser chamadas de **procedures**.
* As **características** de uma função pura são:
    1. ter parâmetros de entrada
    2. não depender do estado externo
    3. retorno baseado nos valores de entrada
    4. não devem causar efeitos colaterais
        * são efeitos colaterais: (1) escrita em base de dados, (2) escrita em arquivos e (3) impressão de dados na tela
* Não é fácil escrever **funções puras**.
* Os **principais motivos** de se utilizar funções puras são:
    * reusabilidade
    * componibilidade
    * facilidade de teste
    * facilidade de cache
* Escrever funções puras pode parecer **muito restritivo**, mas a restritividade é boa pois ajuda a **manter o foco**.
* A **programação funcional** não é sobre não ter **estado**, mas sim sobre ter um **melhor controle** do estado.

## [19. Function Composition](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270720)

* A **composição de funções** permite criar uma nova função a partir de outras funções.
* A **leitura do código** é muito importante e, por isso, não recomenda-se realizar o *aninhamento de chamada de funções*.
* A **composição de funções** é uma solução *elegante* e *legível* e ajuda a evitar a utilização do *aninhamento de funções*.
* O Ramda.js possui uma função que permite criar uma **nova função** a partir da *composição de funções*.
* A **função `compose`** funciona da direita para a esquerda.
```javascript
// 01 - creating a new function from other functions by compostion

const sentence = 'estava à toa na vida o meu amor me chamou pra ver a banda passar cantando coisas de amor';

const wordList = R.split(' ', sentence);

console.log(wordList);

// obtaining the result from nested function call
const wordCount = R.length(R.split(' ', sentence));
// const wordCount = R.length(wordList);

console.log(wordCount);

// create a function using composition
const countWords = R.compose(R.length, R.split);

console.log(countWords(' ', sentence));

// create a function using composition and currying
const countWords2 = R.compose(R.length, R.split(' '));

console.log(countWords2(sentence));

// create a function using composition (pipe) and currying
const countWords3 = R.pipe(R.split(' '), R.length);

console.log(countWords3(sentence));
```
* Pode-se utilizar a **função `pipe`** do Ramda.js para *compor funções* da esquerda para a direita. 

## [20. HTML Introduction](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270724)

* O HTML descreve a **estrutura do conteúdo** de uma página web.
* O DOM é uma **estrutura de dados** que permite que o conteúdo da página seja **alterado** através de programação utilizando JavaScript.

## [21. CSS Introduction](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270726)

* O CSS é uma **linguagem** utilizada para controlar a *formatação*, a *apresentação* e a *aparência geral* de uma página web.
* Pode-se utilizar uma **biblioteca CSS** para ajudar na *estilização* de páginas web.

## [22. Tachyons CSS Library](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270728)

* Utilizar CSS **não é fácil** como parece e muitos sites utilizam-no de forma **complexa** e **incoerente**.
* Muitos sites possuem *regras duplicadas*, que *sempre crescem* e *nunca diminuem*.
* A tentativa de **remover regras** pode causar *insegurança* de quebrar algo acidentalmente.
* É **difícil** manter CSS em projetos de longa duração.
* Devemos nos perguntar **como podemos evitar** que um CSS cresça?
* A resposta para isso é sobre **como utilizamos** o CSS.
* Em bibliotecas como o Bootstrap existem **classes para botões** e suas variações. E, quando necessário, criamos **variações adicionais**.
* Em bibliotecas como a Tachyons **não existem** classes de botões. Para criar botões deve-se **combinar** ou **compor** diversas classes **muito simples** e **genéricas**.
* A Tachyons possui **diversas classes** *muito simples* e *que fazem apenas uma coisa*.
* Pode-se utilizar a classe `pa3` para adicionar um *padding*, para *todos os lados* e no *tamanho 3* (numa escala de 1 a 7).
* A **escala** é feita em *múltiplos de 2* para gerar um número inteiro e não ocasionar em problemas com subpixels em diferentes navegadores e diferentes tamanhos de tela.
* A abordagem de **compor** e **combinar classes** em Tachyons é semelhante a **programação funcional**.

## [23. Generating HTML and CSS](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270730)

* Em programação funcional, diferentemente de programação orientada a objetos, deve-se manter **dados** e **funções** o mais separado possível.
* Pode-se utilizar a biblioteca `hyperscript` e `hyperscript-helpers` para auxiliar na **transformação** de estruturas de dados em elementos HTML.
```javascript
// 01 - using the libraries hyperscript and hyperscript-helpers
// to transform data structures in HTML elements

const { h1 } = tags;

const myHeading = h1('Hello World');

console.log(myHeading.outerHTML); // "<h1>Hello World</h1>"

const node = document.getElementById('app');

node.appendChild(myHeading);
```

## [24. Transforming Data into HTML and CSS](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270732)

* A **interface** deve ser renderizada para representar o **estado atual** da aplicação.
* Deve-se criar **funções pequenas** que podem ser **combinadas apropriadamente** para gerar a interface.
* Ao se perguntar sobre **quantas funções** criar, devemos levar em consideração o **princípio da responsabilidade única** e criar funções com apenas **uma responsabilidade**.

## [25. HTML and CSS Exercise Review](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270734)

* Pode-se utilizar uma **constante** no lugar de uma função para definir algo que não muda.
* Como um **programador funcional** estamos interessados em **dados** e **transformação dos dados**.
* É importante aprender um **estilo de programação** diferente pois permite **melhorar nossas habilidades**.
* Recomenda-se a **leitura de código** de outros desenvolvedores com frequência.

## [26. Declarative Programming](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270738)

* Existem diversos estilos de programação como a **programação imperativa** e a **programação declarativa**.
* A programação funcional segue a **programação declarativa**.
* Os códigos feitos utilizando jQuery são, na maioria das vezes, **imperativos**.

## [27. What Is Functional Programming?](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270740)

* A **programação funcional** é um estilo de programação que utiliza **funções puras**.
* Utilizam-se **funções puras** pois elas são *reutilizáveis*, *componíveis*, *fáceis de testar*, *fáceis de cachear* e *paralelizáveis*.
* A **programação funcional** não é sobre não ter **estado** e sim sobre **eliminar** *estados* e *efeitos colaterais* sempre que possível e **controlar** os *efeitos colaterais* quando necessários.
* A **maioria dos bugs** são relacionados ao **controle de estado**.

## [28. Development Environment Setup](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270742)

* É importante **construir uma aplicação** para **compreender** a *estrutura da aplicação* e como realizar a *manutenção de estado*.
* Pode-se utilizar o Webpack para realizar o **build da aplicação** e **rodar o servidor web** durante o desenvolvimento.
* O Webpack, junto com o Babel, é responsável por **orquestrar** a *compilação do JavaScript* da *sintaxe mais recente* para uma *sintaxe mais antiga* compatível com todos os navegadores.
* O Webpack é responsável também pela **criação do bundle** com o código JavaScript da sua aplicação (transformado pelo Babel) e das bibliotecas Ramda.js e HyperScript.
* O Webpack disponibiliza um **servidor web** para realizar os testes da aplicação.
* O Webpack **monitora** qualquer **alteração no código da aplicação** e quando uma *alteração acontecer* o Webpack *recompilará o código* e *atualizará a página automaticamente*.

## [29. Planning The App](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270744)

* Os ***building blocks*** de uma aplicação feita utilizando programação funcional são **dados imutáveis** e **funções puras**.
* Uma **função *update*** é uma função que **atualiza** o *modelo de dados* de acordo com as *interações* que ocorrem na aplicação.
* Uma **função *view*** é uma função que **transforma** o *modelo de dados* na *representação visual* (HTML e CSS) que será exibida no navegador.
* Não são permitidos **efeitos colaterais** nas **funções *update*** e ***view***.
* Onde os **efeitos colaterais** são permitidos?

## [30. View Functions](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270748)

* A **função *view*** deve receber como argumento a ***model*** representando o **estado atual** e retornar uma **representação visual**  do mesmo.
* Recomenda-se criar um valor *initModel* para o **estado inicial** da aplicação.

## [31. Update Functions](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270750)

* A **função *update*** deve receber como argumentos uma **mensagem** que indica *qual interação foi realizada* e uma **model** que *representa o estado atual da aplicação* e deve retornar uma **model** que *representa o novo estado atual da aplicação*.

## [32. App Function](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270752)

* Um **aplicação** é inútil sem **efeitos colaterais**.
* Uma **aplicação** contém o *estado inicial*, uma *função update* e uma *função view*.
* Porém, é necessária uma **função** que controle o *estado da aplicação* e que *reproduza as alterações no DOM* que são, essencialmente, **efeitos colaterais**.
* Devemos nos lembrar sempre dos **princípios de programação funcional** que é *eliminar os efeitos colaterais* quando possível e *controlar os efeitos colaterais* quando necessário.
* A **alteração do estado** e a **manipulação DOM** é feito por **funções impuras**.

## [33. Counter Improvements](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270756)

* Na programação funcional deve-se ter mais **funções puras** do que **funções impuras**.
* Uma aplicação que utiliza **programação funcional** crescerá em número de **funções puras**.
* A parte da aplicação que contém **funções impuras** quase não crescerá.
* O **desempenho da aplicação** pode não ser o ideal pois toda a **árvore do DOM** é reconstruída a cada interação do usuário.
* A **renderização** de elementos na tela é uma **operação cara** e isso deve ser levado em consideração em **aplicações maiores**.
* Pode-se utilizar uma biblioteca de ***virtual DOM*** para ter um **melhor desempenho** na renderização de elementos na tela.
* Uma biblioteca de **virtual DOM** realiza o **cálculo da diferença** entra a *view* e a *representação do DOM* e obtém o **menor número de alterações** que devem ser realizadas no DOM.

## [34. Adding a Virtual DOM](https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/t/lecture/9270758)

* Recomenda-se utilizar uma biblioteca de ***virtual DOM*** no projeto para ter um **melhor desempenho** na renderização de elementos na tela.