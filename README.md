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