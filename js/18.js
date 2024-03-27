//shortcircuit evaluation
// && ||
// && si la primera es falsa no evalua la segunda
// || si la primera es verdadera no evalua la segunda
// truty y falsy
let a = 10;
let b = 20;
let c = 30;
let d = 40;
if (a > b || c > d) {
  console.log("a es mayor que b o c es mayor que d");
}

if (a > b && c > d) {
  console.log("a es mayor que b y c es mayor que d");
}

const auth = false;
const user = auth && "K";
console.log(user);