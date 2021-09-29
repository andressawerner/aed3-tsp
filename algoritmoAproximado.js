import factorial from './assistants/factorial.js'
import combinations from './assistants/combinations.js'
import selectPath from './assistants/selectPath.js'

const algoritmoAproximado = matriz => {
  console.log('---------- ALGORITMO APROXIMADO ----------')

  const nodes = matriz.length
  const maxCombinacoes = factorial(nodes - 1)
  console.log(`Combinações a serem verificadas: ${maxCombinacoes}`)

  const combinacoes = combinations(nodes, maxCombinacoes)
  const menorCaminho = selectPath(combinacoes, matriz)

  console.log(`Melhor caminho: ${menorCaminho.path}`)
  console.log(`Valor do melhor caminho: ${menorCaminho.value}`)
}

export default algoritmoAproximado
