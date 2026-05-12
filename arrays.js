let values=[1,2,3,'Apples','Tomatoes','Oranges']
console.log(values)
console.log(values[4])

values[3]=true
console.log(values)

//lenght
console.log(values.length)

//at
console.log(values.at(5))//oranges
console.log(values.at(-2))//Tomatoes

//slice
console.log(values.slice(2,5))//

//adding items at the beginning of an array
values.push("HP",8,9,10)
console.log(values)
//adding items at the end of an array
values.unshift('Mango','Peach',100)
console.log(values)
//removes an item from the end
values.pop()
console.log(values)
//removing values with shift
values.shift()
console.log(values)
//includes ->returns true or false
console.log(values.includes(5))