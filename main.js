import tsp1 from './data-js/tsp1_253.js'
import tsp2 from './data-js/tsp2_1248.js'
import tsp3 from './data-js/tsp3_1194.js'
import tsp4 from './data-js/tsp4_7013.js'
import tsp5 from './data-js/tsp5_27603.js'

import factorial from './assistants/factorial.js'
import combinations from './assistants/combinations.js'
import selectPath from './assistants/selectPath.js'
import transformToMatriz from './assistants/transformToMatriz.js'

const matriz = transformToMatriz(tsp2)

const nodes = matriz.length

const qtdNodos = nodes //11
const qtdArestas = (Number(qtdNodos) * (Number(qtdNodos) - 1)) / 2
const maxCombinacoes = factorial(qtdNodos - 1)

console.log(`Combinações a serem verificadas: ${maxCombinacoes}`)

//matriz: Contém o map dos caminhos, do nodo 0 até o nodo n
//combinacoes: Contém o número de combinações que terão de ser conferidas

const combinacoes = combinations(qtdNodos, maxCombinacoes)

const menorCaminho = selectPath(combinacoes, matriz)

console.log(`Melhor caminho: ${menorCaminho.path}`)
console.log(`Valor do melhor caminho: ${menorCaminho.value}`)
