let person ={
    name:'Jane Doe',
    age:29,
    address:'123 kimathi street',
    'is employed':true
}
console.log(person)
console.log(person.name)
console.log(person['is employed'])
console.log(person['address'])

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

//changing values
person.name='Sylvia'
console.log(person)