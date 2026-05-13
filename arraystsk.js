//Assignment 1: Create an Array
//Create an array named colors with the following elements: 'red', 'green', 'blue'.

//Assignment 2: Access and Modify Array Elements
//Given the array colors, access the second element and change it to 'pink'. Then, display the modified array.
//Assignment 3: Determine the Length of an Array
//Given the array colors, determine its length and store it in a variable lengthOfColors. Then, display lengthOfColors.
//Assignment 4: Use .pop() Method
//Given the array colors, use the .pop() method to remove the last element from the array. Then, display the modified array//.
let colors=['red','green','blue']
colors[1]='pink'
console.log(colors)
let lengthOfColors=colors.length
console.log(lengthOfColors)
colors.pop()
console.log(colors)
//Assignment 1: Combine Arrays
//Given two arrays arr1 and arr2, combine them into a single array combinedArray using the .concat() method. Then, remove the first element from combinedArray using the .shift() method. Finally, display the modified combinedArray.
//Assignment 2: Extract Subarray
//Given an array “sourceArray”, extract a subarray “extractedArray” from index 2 to index 4 using the .slice() method. Then, modify the extractedArray by replacing its elements with 'x', 'y', and 'z' using the .splice() method. Finally, display both the sourceArray and the modified extractedArray.

let arr1=['one','two','three','four']
let arr2=['houses','Cars','People','Chairs']
let allarrays=arr1.concat(arr2)
console.log(allarrays)
allarrays.shift()
console.log(allarrays)

let sourceArray=['a','b','c','d','e','f']
let extractedArray=sourceArray.slice(2,4)
console.log(extractedArray)

extractedArray.splice(5,6,'x','y','z')
console.log(extractedArray)
console.log(sourceArray)