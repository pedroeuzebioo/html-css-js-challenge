// perguntas geradas por IA
const perguntas = [
  {
    pergunta: "Qual tag é utilizada para definir um parágrafo em HTML?",
    respostas: [
      "<p>",
      "<par>",
      "<paragraph>"
    ],
    correta: 0
  },
  {
    pergunta: "Qual propriedade CSS é usada para definir a cor do texto?",
    respostas: [
      "color",
      "text-color",
      "font-color"
    ],
    correta: 0
  },
  {
    pergunta: "Qual função é usada para exibir uma mensagem de alerta em JavaScript?",
    respostas: [
      "alert()",
      "message()",
      "show()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual elemento HTML é usado para criar uma lista não ordenada?",
    respostas: [
      "<ul>",
      "<ol>",
      "<list>"
    ],
    correta: 0
  },
  {
    pergunta: "Qual seletor CSS é usado para selecionar elementos pelo ID?",
    respostas: [
      "#",
      ".",
      "&"
    ],
    correta: 0
  },
  {
    pergunta: "Qual método JavaScript é usado para remover o último elemento de um array?",
    respostas: [
      "pop()",
      "removeLast()",
      "deleteLast()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual atributo HTML é usado para definir o endereço de um link?",
    respostas: [
      "href",
      "link",
      "src"
    ],
    correta: 0
  },
  {
    pergunta: "Qual propriedade CSS é usada para definir o tamanho da fonte?",
    respostas: [
      "font-size",
      "text-size",
      "size"
    ],
    correta: 0
  },
  {
    pergunta: "Qual evento JavaScript é acionado quando um usuário clica em um elemento HTML?",
    respostas: [
      "onclick",
      "onmouseover",
      "onchange"
    ],
    correta: 0
  },
  {
    pergunta: "Qual tag HTML é usada para criar um link?",
    respostas: [
      "<a>",
      "<link>",
      "<url>"
    ],
    correta: 0
  }
];

// uso o DOM (Document Object Model) para pegar meu elemento
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();

// loop ou laço de repetição
for (const item of perguntas) {
  // uso o cloneNode para clonar o nó (filhos do elemento template)
  const quizItem = template.content.cloneNode(true);

  // modifica o elemento <h3> para a pergunta correspondente
  quizItem.querySelector("h3").textContent = item.pergunta

  for (const resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    // adiciona atributo name no input
    dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item));

    // adiciona os valores no input 
    dt.querySelector("input").value = item.respostas.indexOf(resposta);

    // quando o input sobre um evento de onChange - mudança
    dt.querySelector("input").onChange = (evento) => {
      // armazena o item correto na variavel "estaCorreta"
      const estaCorreta = evento.target.value = item.correta;

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
    }

    quizItem.querySelector("dl").appendChild(dt);
  }

  // remove o primeiro item "Resposta A" lá do HTML
  quizItem.querySelector("dl dt").remove()

  // uso a função appendChild() para adicionar os meus elementos filhos dentro do meu quiz
  quiz.appendChild(quizItem)
}
