const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(list) {
  let seen = []
  let result = []
  for (let item of list) {
    if (!seen[item]) {
      seen[item] = true
      result.push(item)
    }
  }
  return result

  // Completar
}

console.log(removeDuplicates(duplicates))
