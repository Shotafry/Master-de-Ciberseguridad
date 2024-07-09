const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList, name) {
  // Completar
  for (let i = 0; i < nameList.length; i++)
    if (nameList[i] === name) {
      return true
    }
  return false
}

console.log(nameFinder(names, 'Peggy')) // Debe devolver true
