// ejemplo if

let age = 18

if (age >= 18) {
  console.log('Eres mayor de edad')
}

// ejemplo if-else

if (condición) {
  // código a ejecutar si se cumple la condición
} else {
  // código a ejecutar si NO se cumple la condición
}

let age = 17

if (age >= 18) {
  // este código no se ejecuta porque la condición no se cumple
  console.log('Eres mayor de edad')
} else {
  // por aquí pasa el código y se lee el log
  console.log('Eres menor de edad')
}

// ejemplo if-else if

if (condición) {
  // código a ejecutar si se cumple la condición
} else if (condición2) {
  // código a ejecutar si NO se cumple la condición y SI se cumple la segunda
} else {
  // código a ejecutar si NINGUNA de las anteriores condiciones se cumple
}
let age = 18

if (age > 18) {
  // este código no se ejecuta porque la condición no se cumple
  console.log('Eres mayor de edad')
} else if (age === 18) {
  // por aquí pasa el código y se lee el log
  console.log('Tienes 18 años')
} else {
  // este código no se ejecuta porque se cumplió la condición de arriba
  console.log('Eres menor de edad')
}

// ejemplo switch, mas rarillo pero funciona, es para no poner tantos else if

const superhero = 'Spider-Man'

switch (superhero) {
  case 'Spider-Man':
    console.log('Su nombre real es Peter Parker')
    break
  case 'Daredevil':
    console.log('Su nombre real es Matt Murdock')
    break
  case 'Iron Man':
    console.log('Su nombre real es Tony Stark')
    break
  case 'Ant-Man':
    console.log('Su nombre real es Scott Lang')
    break
  case 'Black Widow':
    console.log('Su nombre real es Natasha Romanov')
    break
  default:
    console.log('No hay superheroe')
    break
}
