//examples of spread
//1
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5];
console.log(newNumbers);

//2
const person = {
  name: "Max",
};

//for variable reference doesn't get copied
let a = 5;
const b = a;
a = 6;
console.log(b);

const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);

//examples of rest(arguement)
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3, 4));
