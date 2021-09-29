function combinations(qtdNodos, factorial) {
  const combinations = []
  const combinationsNot = []
  const maxCombinations = factorial

  const envolved = []
  for (let i = 1; i < qtdNodos; i++) {
    envolved.push(i)
  }

  let i = 0
  while (i != maxCombinations) {
    let combination = ['0']
    let disponiveis = envolved.slice()

    for (let j = 0; j < envolved.length; j++) {
      let proxNodo = getRandomNode(0, disponiveis.length - 1)
      const nodo = disponiveis.splice(proxNodo, 1)
      combination.push(nodo)
    }

    if (!combinationsNot.includes(combination.join(' '))) {
      combinations.push(combination.join(' '))
      combinationsNot.push(combination.join(' '))
      combination.shift()

      combination.reverse()
      combinationsNot.push('0 ' + combination.join(' ')) //o caminho de ida ou volta é o mesmo

      i = i + 2
    }
  }

  return combinations
}

function getRandomNode(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

export default combinations
