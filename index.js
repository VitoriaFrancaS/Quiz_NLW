const perguntas = [
    {
        pergunta: "O que é uma variável em programação?",
        respostas: [
            "Um tipo de dado",
            "Um operador aritmético",
            "Um espaço de armazenamento de dados"
        ],
        correta: 2
    },
    {
        pergunta: "Qual dos seguintes não é um tipo de estrutura de controle em programação?",
        respostas: [
            "if-else",
            "loop for",
            "função de impressão"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um loop em programação?",
        respostas: [
            "Uma função matemática",
            "Uma declaração condicional",
            "Um bloco de código que se repete várias vezes"
        ],
        correta: 2
    },
    {
        pergunta: "O que significa 'debugar' um programa?",
        respostas: [
            "Desativar uma função",
            "Corrigir erros em um programa",
            "Criar um programa novo"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão '5 + 3 * 2'?",
        respostas: [
            "16",
            "11",
            "10"
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função em programação?",
        respostas: [
            "Uma variável global",
            "Um conjunto de instruções reutilizáveis",
            "Um tipo de dado numérico"
        ],
        correta: 1
    },
    {
        pergunta: "O que é um algoritmo?",
        respostas: [
            "Uma linguagem de programação",
            "Um tipo de variável",
            "Um conjunto de instruções para resolver um problema"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a linguagem de programação mais utilizada para desenvolvimento web?",
        respostas: [
            "Java",
            "Python",
            "JavaScript"
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma string em programação?",
        respostas: [
            "Um tipo de dado booleano",
            "Um conjunto de números",
            "Uma sequência de caracteres"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão '10 % 3'?",
        respostas: [
            "3",
            "1",
            "0"
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz') // Seleciona o elemento com ID 'quiz'
const template = document.querySelector('template')  // Seleciona o elemento com ID 'template'

const corretas = new Set();
const totalPerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas;


//loop de reptição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode('true')
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas

        }

        quizItem.querySelector('dl').appendChild(dt)



    }

    quizItem.querySelector('dl dt').remove()



    quiz.appendChild(quizItem)
}