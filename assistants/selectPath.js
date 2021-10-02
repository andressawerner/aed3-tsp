function selectPath(combinations, map) {
  let path = combinations[0]
  let value = Number.MAX_VALUE
  combinations.forEach((elem) => {
    let tempValue = 0
    const tempElem = elem.split(' ')
    for (let i = 0; i < tempElem.length; i++) {
      if (i + 1 >= tempElem.length) {
        tempValue += Number(map[Number(tempElem[i])][Number(tempElem[0])])
      } else {
        tempValue += Number(map[Number(tempElem[i])][Number(tempElem[i + 1])])
      }
      if (tempValue > value) {
        i = tempElem.length
      }
    }
    if (tempValue < value) {
      value = tempValue
      path = elem + ' 0'
    }
  })

  return { value: value, path: path }
}

export default selectPath
