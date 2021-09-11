//array destructuirng
let a,b;
[a,,b]=["Hello","Muller", "Max" ]
console.log(a)
console.log(b)

//examples of object destructuring
//1
let name = '',age;
({name} = {name:'Max',age:28})
console.log(name)
console.log(age)

//2
const myObj = {
    fname: 'Max',
    age: 28
}
const {fname} = myObj;
console.log(fname); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}