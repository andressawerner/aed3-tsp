const firstEdge = matriz => {
  let x
  let y
  let value = Number.MAX_VALUE

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      const actualNumber = Number(matriz[i][j])
      if (actualNumber && actualNumber < value) {
        value = actualNumber
        x = i
        y = j
      }
    }
  }

  return { x: x, y: y, value: value }
}

export default firstEdge
