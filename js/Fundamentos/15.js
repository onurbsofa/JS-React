//array methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let words = [
  "robots",
  "butterfly",
  "flower",
  "tree",
  "sky",
  "water",
  "rock",
  "sun",
  "moon",
  "star",
];

//filter
let natural = words.filter((word) => word.length < 4);
console.log(natural);

//includes
let isRobot = words.includes("robots");
console.log(isRobot);

//some
let isSome = numbers.some((number) => number > 5);
console.log(isSome);

//find
let find = words.find((word) => word === "rock");
console.log(find);

//every
let isEvery = numbers.every((number) => number > 5);
console.log(isEvery);

//reduce (acumulador, valor actual)
let reduce = numbers.reduce((acc, number) => acc + number, 0);
console.log(reduce);
