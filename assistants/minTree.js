import firstEdgeFunction from './firstEdge.js'

import tsp2 from '../data-js/tsp2_1248.js'
import transformToMatriz from './transformToMatriz.js'

const minTree = matriz => {
  //console.log('---------- MIN TREE ----------')

  const firstEdge = firstEdgeFunction(matriz) //escolho a menor aresta pra ser a primeira

  const tree = [firstEdge]
  const alreadyTree = [firstEdge.x, firstEdge.y]
  //const valueTree = firstEdge.value

  while (alreadyTree.length != matriz.length) {
    let next = { x: 0, y: 0, value: Number.MAX_VALUE }
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz.length; j++) {
        const actualNumber = Number(matriz[i][j])
        if (
          alreadyTree.includes(i) &&
          !alreadyTree.includes(j) &&
          next.value > actualNumber
        ) {
          next.x = i
          next.y = j
          next.value = actualNumber
        }
      }
    }
    tree.push(next)
    alreadyTree.push(next.y)
  }

  //console.log(tree)
  return tree
}

//minTree(transformToMatriz(tsp2))
export default minTree
