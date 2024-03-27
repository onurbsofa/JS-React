const tecnologias = ["js", "react", "node", "angular"];
tecnologias[4] = "vue";
console.log(tecnologias);

//metodos para arreglos
// es importante saber que metodos son mutables y cuales no para trabajar con react
//agregar elementos a un arreglo
const meses = ["enero", "febrero", "marzo", "abril", "mayo"];
meses.push("junio"); //push no muta el arreglo, lo copia y le agrega el elemento
console.table(meses);

// es lo mismo que hacer esto
// meses = [...meses, "junio"];

//borrar el ultimo elemento de un arreglo
meses.shift(); //shift muta el arreglo
console.table(meses);

//borrar el primer elemento de un arreglo
meses.pop(); //pop muta el arreglo

//borrar un elemento en cualquier posicion
meses.splice(2, 1); //splice muta el arreglo

// para no mutar el arreglo se puede hacer lo siguiente
const meses2 = ["enero", "febrero", "marzo", "abril", "mayo"];
const meses3 = meses2.filter((mes) => mes !== "marzo");
console.table(meses2);
console.table(meses3);

//acceder a un elemento de un arreglo
const tecnologias2 = tecnologias.map((tecnologia) =>{ if(tecnologia === "react"){ return "reactjs"}  else{return tecnologia}});
console.log(tecnologias2);
