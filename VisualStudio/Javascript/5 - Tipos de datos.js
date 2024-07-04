// estos son strings
let texto = 'Hola equipo'

let str = 'otro ejemplo'

let otro = `Alguien dijo una vez: "Que la Fuerza te acompañe"`

// estos son numericos
let numeroPi = 3.14
let edad = 17

// estos son boleanos

let isActive = true
let isDisabled = false

// este es un null

let error = null

// este es un undefined
let notDefined
let defineUndefined = undefined

// este es un objeto
const megarobot = {
  nombre: 'Unidad EVA 01',
  piloto: 'Shinji Ikari',
  tipo: 'Evangelion de producción',
  núcleo: 'S², el alma de Lilith',
  altura: 40,
  peso: 60
}

// este es un array
let elementos = [1, 'Manzana', true, { color: 'azul' }, 9.34]

// este es un comprobador o typeof
let myFun = new Function('5 + 2')
let shape = 'round'
let size = 1
let food = ['Apple', 'Mango', 'Orange']
let today = new Date()

typeof myFun // "function"
typeof shape // "string"
typeof size // "number"
typeof food // "object"
typeof today // "object"
typeof doesntExist // "undefined"

typeof true // "boolean"
typeof null // "object"

// estos son varios metodos de strings
// Longitud de la cadena
str.length

// Encontrar la posición de la primera coincidencia de una cadena
str.indexOf('texto')

// Encontrar la posición de la última coincidencia de una cadena
str.lastIndexOf('texto')

// Extraer una parte de una cadena
str.slice(inicio, fin)

// Reemplazar una parte de una cadena con otra cadena
str.replace('cadenaAntigua', 'cadenaNueva')

// Convertir a mayúsculas
str.toUpperCase()

// Convertir a minúsculas
str.toLowerCase()

// Concatenar dos o más cadenas
str.concat('cadena1', 'cadena2')

// Eliminar espacios en blanco al principio y al final
str.trim()

// Dividir una cadena en un array de subcadenas
str.split('separador')

// Convertir una cadena en un array de caracteres
str.split('')

// Extraer una parte de una cadena y devolver la parte extraída
str.substring(inicio, fin)

// Convertir una cadena en un array de caracteres Unicode
str.split('')

// Comprueba si una cadena comienza con ciertos caracteres
str.startsWith('texto')

// Comprueba si una cadena termina con ciertos caracteres
str.endsWith('texto')

// Comprueba si una cadena incluye ciertos caracteres
str.includes('texto')

// Devuelve la cadena entre las posiciones especificadas
str.substr(inicio, longitud)

// Devuelve el código Unicode del carácter en una posición específica
str.charCodeAt(posición)

// estos son metodos math
// Valor absoluto
Math.abs(-10)

// Redondea hacia arriba al entero más cercano
Math.ceil(4.3)

// Trunca hacia abajo al entero más cercano
Math.floor(4.7)

// Retorna el número más grande de una lista de argumentos
Math.max(5, 2, 8, 1, 4)

// Retorna el número más pequeño de una lista de argumentos
Math.min(5, 2, 8, 1, 4)

// Eleva un número a una potencia especificada
Math.pow(2, 3)

// Retorna un número aleatorio entre 0 y 1
Math.random()

// Redondea al entero más cercano
Math.round(4.7)

// Retorna el signo de un número
Math.sign(-3)

// Retorna la raíz cuadrada de un número
Math.sqrt(16)

// Retorna el seno de un ángulo en radianes
Math.sin(Math.PI / 2)

// Retorna el coseno de un ángulo en radianes
Math.cos(Math.PI)

// Retorna la tangente de un ángulo en radianes
Math.tan(Math.PI / 4)

// Retorna el arco seno de un número en radianes
Math.asin(0.5)

// Retorna el arco coseno de un número en radianes
Math.acos(0.5)

// Retorna el arco tangente de un número en radianes
Math.atan(1)

// Retorna el logaritmo natural (base e) de un número
Math.log(1)

// Retorna e elevado a la potencia de un número
Math.exp(1)

// Valor de Pi (π)
Math.PI

// Valor de la base del logaritmo natural (e)
Math.E
