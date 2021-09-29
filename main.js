//import './data/tsp1_253.txt'
import factorial from './assistants/factorial.js'
import combinations from './assistants/combinations.js'
import selectPath from './assistants/selectPath.js'

const readline = require('readline')

console.log(`Qual das entradas disponíveis gostaria de utilizar?
1 - TSP 1
2 - TSP 2
3 - TSP 3
4 - TSP 4
5 - TSP 5

Por favor, digite o número referente a sua escolha: `)

const chooseTSP = readline()
console.log('Escolheu ' + chooseTSP)

const stringMatriz = `0    64  378 519 434 200 
64  0    318 455 375 164 
378 318 0    170 265 344 
519 455 170 0    223 428 
434 375 265 223 0    273 
200 164 344 428 273 0`

const linhas = stringMatriz.split('\n')
var matriz = []

for (let i = 0; i < linhas.length; i++) {
  const numeros = linhas[i].replace(/[^\d]+/g, ' ').split(' ')
  for (let j = 0; j < numeros.length; j++) {
    if (matriz[i] == undefined) {
      matriz[i] = []
    }
    matriz[i][j] = numeros[j]
  }
}

const nodes = matriz.length

const qtdNodos = nodes //11
const qtdArestas = (Number(qtdNodos) * (Number(qtdNodos) - 1)) / 2
const maxCombinacoes = factorial(qtdNodos - 1)
console.log(`Combinações a serem verificadas: ${maxCombinacoes}`)

//matriz: Contém o map dos caminhos, do nodo 0 até o nodo n
//combinacoes: Contém o número de combinações que terão de ser conferidas

const combinacoes = combinations(qtdNodos, maxCombinacoes)

const menorCaminho = selectPath(combinacoes, matriz)
