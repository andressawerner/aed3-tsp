import selectPath from './assistants/selectPath.js'
import minTree from './assistants/minTree.js'
import contornandoTree from './assistants/contornandoTree.js'
import calcMenorCaminho from './assistants/calcMenorCaminho.js'

const algoritmoAproximado = (matriz) => {
  console.log('---------- ALGORITMO APROXIMADO ----------')

  const tree = minTree(matriz)

  const nodes = matriz.length
  const caminhoContornado = contornandoTree(tree)
  const menorCaminho = calcMenorCaminho(caminhoContornado, tree)

  console.log(`Melhor caminho: ${menorCaminho.path.join(' ')}`)
  console.log(`Custo do melhor caminho: ${menorCaminho.value}`)
}

export default algoritmoAproximado
