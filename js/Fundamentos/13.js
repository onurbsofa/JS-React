console.log(sumar(5, 5));
console.log(restar(5, 5));

// funciones
function sumar(a = 10, b = 11) {
  return a + b;
}

console.log(sumar(5, 5));

// function exrpresion esto hace que una fucion se guarde como una variable
//esto hace que js lo lea como una variable y si se invoca antes de declararla dara error
const restar = function (a = 10, b = 11) {
  return a - b;
};


