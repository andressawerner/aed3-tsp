function selectPath(combinations, map) {
  let path = combinations[0]
  let value = Number.MAX_VALUE
  combinations.forEach(elem => {
    let tempValue = 0
    for (let i = 0; i < elem.length; i++) {
      if (i + 2 > elem.length) {
        tempValue += Number(map[Number(elem[i])][Number(elem[0])])
      } else {
        tempValue += Number(map[Number(elem[i])][Number(elem[i + 2])])
      }
      i++
    }
    if (tempValue < value) {
      value = tempValue
      path = elem
    }
  })

  console.log(`Melhor caminho: ${path}`)
  console.log(`Valor do melhor caminho: ${value}`)

  return 'result'
}

export default selectPath
