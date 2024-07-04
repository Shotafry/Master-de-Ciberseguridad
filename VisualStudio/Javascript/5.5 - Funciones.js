// sintaxis

function nombreDeLaFuncion(parametros) {
  // código a ejecutar
}

// ejemplo
  return a + b;
}

let resultado = suma(3, 4); // 7

pokemonAttack(); // ¡Pikachu impact Trueno!

pokemonAttackParams("Charmander", "Ascuas"); // ¡Charmander Ascuas!

pokemonAttackParams("Squirtel", "Pistola de agua"); // ¡Squirtel Pistola de agua!
function pokemonAttackParams(name, attack = "Ataque arena") {
  console.log(`¡${name} ${attack}!`);
}

console.log(pokemonAttackParams("Onix")); // ¡Onix Ataque arena!

// retorno de las funciones 
function suma (numA, numB) {
  return numA + numB;
}

let result = suma(5, 20);

console.log(result); // 25

function showMovie(age) {
  if (age <= 18) {
      return;
  }

  console.log("Mostrándote la película");
}

// nombrado de funciones

showMessage() // muestra un mensaje
getAge() // devuelve la edad (la obtiene de alguna manera)
calcSum() // calcula una suma y devuelve el resultado
createForm() // crea un formulario (y usualmente lo devuelve)
checkPermission() // revisa permisos, y devuelve true/false