//Arrow function
//Arrow function es una forma más corta de escribir una función
const jugadores = ["Messi", "Cristiano", "Neymar", "Mbappe"];

const equipoDhoy = jugadores.map((jugador) => {
  if (jugador.includes("M")) return jugador;
});

console.log(equipoDhoy);
// solo funciona si tiene una linea
// y si la expresion despues de la flecha delvueve un valor
//ejemplo de arrow function
const sumar = (a, b) => a + b;
console.log(sumar(5, 5));

//ejemplo de arrow function
const saludar = (nombre) => `Hola ${nombre}`;
console.log(saludar("Juan"));
