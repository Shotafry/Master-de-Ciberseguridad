// hay varios tipos, este es un bucle while (mientras)
let i = 1

while (i <= 10) {
  i++
  console.log(i)
}

// este es un bucle do while
let i = 1

do {
  i++
  console.log(i)
} while (i <= 10)

// este es un bucle for

for (let index = 0; index < 5; index++) {
  // código que se repite 5 veces en total
}

// estos son bucles anidados

let frutas = ['pomelo', 'pera', 'manzana', 'naranja', 'mandarina']

let frutasLength = []

for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i]
  for (let j = 0; j <= fruta.length; j++) {
    frutasLength[i] = j
  }
}

console.log(frutasLength) // [6, 4, 7, 7, 9]

// este es un bucle for...of (estos son para recorrer arrays)

const numbers = [1, 2, 3, 4, 5, 6, 7]

// creamos la variable element
// por dentro actuará de la misma manera que en el bucle for
// obteniendo el valor de numbers[i]
// usamos después del of el array numbers
// que es el que queremos recorrer
// el bucle forof cogerá la longitud de numbers
// y numbers[i] para guardarlo en element
for (const element of numbers) {
  console.log(element)
}

// este es un bucle for...in (estos son para recorrer objetos)

const user = {
  email: 'user@user.com',
  password: 'odsfofjowf'
}

for (const key in user) {
  console.log(user[key])
}
