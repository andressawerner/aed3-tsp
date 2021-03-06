import factorial from './assistants/factorial.js'
import combinations from './assistants/combinations.js'
import selectPath from './assistants/selectPath.js'

const algoritmoExato = (matriz) => {
  console.log('---------- ALGORITMO EXATO ----------')

  const nodes = matriz.length
  const maxCombinacoes = factorial(nodes - 1)
  //console.log(`Combinações a serem verificadas: ${maxCombinacoes}`)

  const menorCaminho = combinations(nodes, maxCombinacoes, matriz)
  //const menorCaminho = selectPath(combinacoes, matriz)

  console.log(`Melhor caminho: ${menorCaminho.path}`)
  console.log(`Custo do melhor caminho: ${menorCaminho.value}`)
}

export default algoritmoExato
