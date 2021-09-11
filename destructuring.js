//array destructuirng
let a,b;
[a,,b]=["Hello","Muller", "Max" ]
console.log(a)
console.log(b)

//object destructuring
let name = '',age;
({name} = {name:'Max',age:28})
console.log(name)
console.log(age)