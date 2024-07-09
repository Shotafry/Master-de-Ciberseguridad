const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
function findArrayIndex(array, text) {
  return array.indexOf(text)

  //Tu codigo
}

console.log(findArrayIndex(mainCharacters, 'Rey')) // Devuelve 4

console.log(findArrayIndex(mainCharacters, 'Yoda')) // Devuelve -1 (no está en el array), ni sabia que pasaba eso, por eso lo pongo

function removeitem(array, text) {
  let index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}

console.log(removeitem(mainCharacters, 'Luke')) // Devuelve [----este ya no'Luke'----, 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan']
