function combinations(qtdNodos, factorial) {
  const combinations = []
  const maxCombinations = factorial

  const envolved = []
  for (let i = 0; i < qtdNodos; i++) {
    envolved.push(i)
  }

  let i = 0
  while (i != maxCombinations) {
    let combination = ''
    let disponiveis = envolved.slice(0)

    for (let j = 0; j < envolved.length; j++) {
      /*let proxNodo = getRandomNode(0, qtdNodos - 1)
      while (combination.includes(proxNodo)) {
        proxNodo = getRandomNode(0, qtdNodos - 1)
      }

      combination += proxNodo + ' '*/
      let proxNodo = getRandomNode(0, qtdNodos - 1)
      while (combination.includes(proxNodo)) {
        proxNodo = getRandomNode(0, qtdNodos - 1)
      }

      combination += proxNodo + ' '
    }
    combination = combination.slice(0, combination.length - 1)
    console.log(`tentando combination`)
    if (!combinations.includes(combination)) {
      console.log(`${i} combination`)
      combinations.push(combination)
      i++
    }
  }
  console.log('combinations done')
  return combinations
}

function getRandomNode(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

export default combinations
