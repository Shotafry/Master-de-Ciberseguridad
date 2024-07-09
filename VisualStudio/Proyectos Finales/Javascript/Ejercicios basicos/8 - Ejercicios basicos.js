const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(stringList) {
  let LongestWord = ''
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > LongestWord.length) {
      LongestWord = stringList[i]
    }
  }
  return LongestWord
}
console.log(findLongestWord(avengers))
