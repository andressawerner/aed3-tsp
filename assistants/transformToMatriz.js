function transformToMatriz(str) {
  const linhas = str.split('\n')
  var matriz = []

  for (let i = 0; i < linhas.length; i++) {
    const numbers = linhas[i].replace(/[^\d]+/g, ' ').split(' ')
    for (let j = 0; j < numbers.length; j++) {
      if (matriz[i] == undefined) {
        matriz[i] = []
      }
      matriz[i][j] = numbers[j]
    }
  }

  return matriz
}

export default transformToMatriz
