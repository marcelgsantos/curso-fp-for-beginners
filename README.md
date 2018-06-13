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
