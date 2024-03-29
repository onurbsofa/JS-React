//optional chaining

const user = {
    name: 'K'
}

console.log(user?.name); //optional chaining
console.log(user?.age); //optional chaining



//nullish coalescing operator

let name = null;
console.log(name ?? 'Nombre no asignado'); //nullish coalescing operator
name = 'K';
