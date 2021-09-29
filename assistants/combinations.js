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
      /*let proxNodo = getRandomNode(0, qtdNodos - 1)
      while (combination.includes(proxNodo)) {
        proxNodo = getRandomNode(0, qtdNodos - 1)
      }

      combination += proxNodo + ' '*/
      let proxNodo = getRandomNode(0, disponiveis.length - 1)
      const nodo = disponiveis.splice(proxNodo, 1)
      //console.log(nodo)

      combination.push(nodo)
    }
    //combination = combination.slice(0, combination.length - 1)
    //console.log(combination)
    if (!combinationsNot.includes(combination.join(' '))) {
      //console.log(`${i} combination`)
      combinations.push(combination.join(' '))
      combinationsNot.push(combination.join(' '))
      combination.shift()
      //console.log(combination.join(' '))
      combination.reverse()
      combinationsNot.push('0 ' + combination.join(' ')) //o caminho de ida ou volta é o mesmo
      //console.log(combination.join(' '))

      i = i + 2
    }
  }
  console.log('combinations done')
  //console.log(combinations)
  //console.log(combinationsNot)
  return combinations
}

function getRandomNode(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

export default combinations
