const calcMenorCaminho = (caminhoContornado, tree) => {
  const contornado = caminhoContornado.contorno
  const contornoObject = caminhoContornado.contornoObject
  const menorCaminho = [contornado[0]]
  let valueMenorCaminho = 0
  let tempValue = 0

  contornoObject.forEach((elem, index) => {
    if (menorCaminho.includes(elem.y)) {
      tempValue += elem.value
    } else {
      tempValue += elem.value
      valueMenorCaminho += tempValue
      menorCaminho.push(elem.y)
      tempValue = 0
    }
  })
  valueMenorCaminho += tempValue
  menorCaminho.push(contornado[0])

  return { value: valueMenorCaminho, path: menorCaminho }
}

export default calcMenorCaminho
