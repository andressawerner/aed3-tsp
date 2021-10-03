import selectPath from './selectPath.js'

function combinations(qtdNodos, factorial, matriz) {
  const combinations = []
  const combinationsNot = []
  const maxCombinations = factorial
  let menorCaminho = { value: Number.MAX_VALUE }

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
      const caminho = selectPath([combination.join(' ')], matriz)
      if (menorCaminho.value > caminho.value) {
        menorCaminho = caminho
      }
      console.log(`Combinações testadas: ${i}`)
      console.log(`Melhor caminho até o momento: ${menorCaminho.path}`)
      console.log(
        `Custo do melhor caminho até o momento: ${menorCaminho.value}
        `
      )

      combinations.push(combination.join(' '))
      combinationsNot.push(combination.join(' '))
      combination.shift()

      combination.reverse()
      combinationsNot.push('0 ' + combination.join(' ')) //o caminho de ida ou volta é o mesmo

      i = i + 2
    }
  }

  return menorCaminho
}

function getRandomNode(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

export default combinations
