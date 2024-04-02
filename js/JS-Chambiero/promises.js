// las promesas se utilizan para trabajar con asincronismo

// Ejemplo de promesa
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Se resolvio la promesa");
  }, 2000);
});

promesa.then((resultado) => {
    console.log(resultado);
    }
);

// ejemplo de async y await
async function miFuncion() {
  return "Hola";
}
