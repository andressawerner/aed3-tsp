import firstEdgeFunction from './firstEdge.js'

import tsp2 from '../data-js/tsp2_1248.js'
import transformToMatriz from './transformToMatriz.js'

const contornandoTree = (tree) => {
  console.log('---------- CONTORNANDO TREE ----------')
  const passos = tree.length * 2
  let contorno = [tree[0].x, tree[0].y]
  let contornoString = `*${tree[0].x}* *${tree[0].y}*`
  let value = tree[0].value
  const first = tree[0].x
  let last = tree[0].y
  while (contorno.length != passos + 1) {
    const preferenceNextNode = tree.filter((elem) => {
      const x = elem.x == last && !contorno.includes(elem.y)
      const y = elem.y == last && !contorno.includes(elem.x)
      return x || y
    })

    if (preferenceNextNode.length) {
      last =
        preferenceNextNode[0].x == last
          ? preferenceNextNode[0].y
          : preferenceNextNode[0].x
      contorno.push(last)
      contornoString += ` *${last}*`
      value += preferenceNextNode[0].value
    } else {
      const possibleNextNode = tree.filter((elem) => {
        const x =
          elem.x == last && !contornoString.includes(`*${last}* *${elem.y}*`)
        const y =
          elem.y == last && !contornoString.includes(`*${last}* *${elem.x}*`)
        return x || y
      })
      last =
        possibleNextNode[0].x == last
          ? possibleNextNode[0].y
          : possibleNextNode[0].x
      contorno.push(last)
      contornoString += ` *${last}*`
      value += possibleNextNode[0].value
    }
  }

  console.log(contorno)
  return { contorno: contorno, contornoString: contornoString }
}

export default contornandoTree
