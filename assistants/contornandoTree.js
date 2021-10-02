const contornandoTree = (tree) => {
  const passos = tree.length * 2
  let contorno = [tree[0].x, tree[0].y]
  let contornoObject = [{ x: tree[0].x, y: tree[0].y, value: tree[0].value }]
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
      const prev =
        preferenceNextNode[0].x == last
          ? preferenceNextNode[0].y
          : preferenceNextNode[0].x
      contorno.push(last)
      contornoString += ` *${last}*`
      value += preferenceNextNode[0].value
      contornoObject.push({
        x: prev,
        y: last,
        value: preferenceNextNode[0].value
      })
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
      const prev =
        possibleNextNode[0].x == last
          ? possibleNextNode[0].y
          : possibleNextNode[0].x
      contorno.push(last)
      contornoString += ` *${last}*`
      value += possibleNextNode[0].value
      contornoObject.push({
        x: prev,
        y: last,
        value: possibleNextNode[0].value
      })
    }
  }

  return {
    contorno: contorno,
    contornoString: contornoString,
    contornoObject: contornoObject
  }
}

export default contornandoTree
