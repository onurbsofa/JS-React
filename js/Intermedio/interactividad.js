//eventos

let inputPasword = document.getElementById("password");
inputPasword.addEventListener("input", ocultarContraseña());

function ocultarContraseña() {
  inputPasword.type = "text";

  setTimeout(() => {
    inputPasword.type = "password";
  }, 3000);
}
