let product
product = 'Zumito'
console.log(product)  // Muestra el contenido de la variable

//podemos ser mas directos y hacerlo en una sola linea

let product = 'Zumito'
console.log(product) // Muestra el contenido de la variable

let product

console.log(product) // La respuesta en consola será el valor "undefined"

product = 'Zumito'

console.log(product) // La respuesta en consola será el valor "Zumito"

product = 'Patata' // Cambio de valor

console.log(product) // La respuesta en consola será el valor "Patata"

let product = 'Tomate';

let myProduct;

//Copiamos Tomate desde product a myProduct
myProduct = product;

//Ahora las dos variables tienen el mismo valor
console.log(product); // Tomate
console.log(myProduct); // Tomate

// Nombres no válidos
let 1product; // No podemos comenzar con números
let my-product; // No se pueden utilizar guiones en los nombres

// Nombres reservados
let let = 'Hola'; // No puedes llamar let a una variable
let return = 'Hola'; // No puedes llamar return a una variable

//esta es una lista de palabras reservadas, las que no puedo usar

break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
false
finally
for
function
if
import
in
instanceof
new
null
return
super
switch
this
throw
true
try
typeof
var
void
while
with
enum // A partir de ECMAScript 6, reservada para un uso futuro.
await // A partir de ECMAScript 7, utilizada en contextos asíncronos.
yield // A partir de ECMAScript 6, utilizada en generadores.