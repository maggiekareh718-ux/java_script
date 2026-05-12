let x=Number(prompt('Enter a number'))
if(x%2==0){
    console.log('Even number')
}else{
    console.log('Odd number')
}

//write a simple if statemnts  to check eligibility of a voter assume a voter must be// at least 18 years)

let age=Number(prompt('Enter age'))
if (age>=18){
    console.log(' Eligible to vote')
}else{
    console.log(' Not Eligible to vote')
}
//checking the larger number
let num1=Number(prompt('Enter num1'))
let num2=Number(prompt('Enter num2'))
let num3=Number(prompt('Enter num3'))

if ((num1>num2)&& (num1>num3)){
    console.log('Num1 is the largest')
}else if ((num2>num1) && (num2>num3)){
    console.log('Num 2 is larger')
}else{
    console.log('Num 3 is the largest')
}

//Write a program that determines ticket prices based on age:
//under 12->500/=,under 18->650/=, adults ->800/=,over 60 yrs ->400/=


let age=Number(prompt('Enter age'))
if (age<12){
    console.log('ticket price=500')
}else if ((age>12)&&(age<18)){
    console.log('ticket price=650')
}else if ((age>=18)&&(age<60)){
    console.log('ticket price=800')
}else{
    console.log('ticket price=400')
}


    

    


//write a program tah  checks whether the length of a username is at least 8 characters 
//if length <8,output "too short" otherwise output 'correct format

let username=prompt('Enter your username')
if (username.length<8){
    console.log('Too short')
}else{
    console.log('correct format')
}

let y=Number('Enter a value')
let even =y%2==0? 'Even':'Odd'
console.log(even)

//using a ternary operator:line 8

let age=Number(prompt('Enter age'))
let no=age>=18? 'Eligible':'Not eligible'
console.log(age)