let person = {
    name: 'Max'
}
//copying the pointer of person
const pointerPerson = person
//copying the actual value of person
const copiedPerson = {
    ...person
}
person.name = 'Manu'
console.log(pointerPerson)
console.log(copiedPerson)