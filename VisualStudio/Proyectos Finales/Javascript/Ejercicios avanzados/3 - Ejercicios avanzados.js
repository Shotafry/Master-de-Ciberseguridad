const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
/* Prueba 1, spoiler: no funciono
let favorites = []
let count = 0
for (const user of users) {
  for (const favorite in user) {
    if (!favorite == user.favoritesSounds[favorite]) count++
  }
}

console.log(count)

console.log(favorites)
*/

let favorites = {}
for (const user of users) {
  for (const sound in user.favoritesSounds) {
    if (favorites[sound]) {
      favorites[sound]++
    } else {
      favorites[sound] = 1
    }
  }
}

console.log(favorites)
