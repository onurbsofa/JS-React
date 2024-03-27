const tecnologias = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];

// recorrer arrays
for (let i = 0; i < tecnologias.length; i++) {
  console.log(tecnologias[i]);
}

// recorrer arrays con forEach
tecnologias.forEach(function (tecnologia) {
  console.log(tecnologia);
});

// recorrer arrays con map te genera un nuevo array
//el mas usado por react
const maptech = tecnologias.map(function (tecnologia) {
  console.log(tecnologia);
});

// for of
for (let tecnologia of tecnologias) {
  console.log(tecnologia);
}