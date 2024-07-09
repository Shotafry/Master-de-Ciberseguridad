const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
/* no se ni que hice, intento 1, sale mal.
function swap(array, param, param1) {
  const index1 = array.findIndex((item) => item === param)
  const index2 = array.findIndex((item) => item === param1)
  if (index1 !== -1 && index2 !== -1) {
    ;[array[index1], array[index2]] = [array[index2], array[index1]]
  }
  return array
}
console.log(swap(fantasticFour, 'La cosa')) */

function swap(array, index1, index2) {
  if (
    index1 >= 0 &&
    index1 < array.length &&
    index2 >= 0 &&
    index2 < array.length
  ) {
    ;[array[index1], array[index2]] = [array[index2], array[index1]]
  }
  return array
}
console.log(swap(fantasticFour, 0, 3)) // cambia 'La antorcha humana' con 'La cosa' y puede hacerse al contrario tambien
console.log(swap(fantasticFour, 1, 2))
