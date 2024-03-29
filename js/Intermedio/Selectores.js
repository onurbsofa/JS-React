//selectores
const heading = document.querySelector(".heading");
console.log(heading);
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.innerHTML);

const listItems = document.querySelectorAll(".navigation a");
console.log(listItems);

heading.textContent = "Nuevo texto";
heading.id = "newId";
