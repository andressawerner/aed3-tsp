import selectPath from './assistants/selectPath.js'
import minTree from './assistants/minTree.js'
import contornandoTree from './assistants/contornandoTree.js'

const algoritmoAproximado = (matriz) => {
  console.log('---------- ALGORITMO APROXIMADO ----------')

  const tree = minTree(matriz)
  console.log(tree)

  const nodes = matriz.length
  const caminhoContornado = contornandoTree(tree)
  //const nodes = matriz.length
  //const maxCombinacoes = factorial(nodes - 1)13andress
  // console.log(`Combinações a serem verificadas: ${maxCombinacoes}`)

  //const combinacoes = combinations(nodes, maxCombinacoes)
  //const menorCaminho = selectPath(tree.join(' '), matriz)

  //console.log(`Melhor caminho: ${menorCaminho.path}`)
  //console.log(`Valor do melhor caminho: ${menorCaminho.value}`)
}

export default algoritmoAproximado
