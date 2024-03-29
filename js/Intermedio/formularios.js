//Formularios

const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector("#nombre");
const password = document.querySelector("#password");

const modalAlert = document.createElement("div");
modalAlert.classList.add(
  "alert",
  "text-white",
  "uppercase",
  "text-sm",
  "text-center",
  "p-2",
  "font-black"
);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  /*     console.log('Enviando formulario'); */
  let nombre = inputNombre.value;
  let pass = password.value;
  /*     console.log(nombre,pass); */

  if (nombre == "" || pass == "") {
    modalAlert.classList.add("bg-red-500");
    modalAlert.textContent = "Todos los campos son obligatorios";
  } else {
    modalAlert.classList.add("bg-green-500");
    modalAlert.textContent = "Formulario enviado correctamente";
  }

  formulario.appendChild(modalAlert);
  setTimeout(() => {
    modalAlert.remove();
  }, 3000);
});
