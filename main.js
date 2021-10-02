import tsp1 from './data-js/tsp1_253.js'
import tsp2 from './data-js/tsp2_1248.js'
import tsp3 from './data-js/tsp3_1194.js'
import tsp4 from './data-js/tsp4_7013.js'
import tsp5 from './data-js/tsp5_27603.js'

import transformToMatriz from './assistants/transformToMatriz.js'
import algoritmoExato from './algoritmoExato.js'
import algoritmoAproximado from './algoritmoAproximado.js'

const matriz = transformToMatriz(tsp2)

algoritmoExato(matriz)

//algoritmoAproximado(matriz)

//const qtdArestas = (Number(nodes) * (Number(nodes) - 1)) / 2
