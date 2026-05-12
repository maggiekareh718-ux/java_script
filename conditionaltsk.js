//Create a variable and console log whether a number is odd or even
let variable = Number(prompt('Enter number'))
if (variable % 2 == 0) {
    console.log('Even Number')
} else {
    console.log('Odd Number')
}
//Create 3 variables and console log the largest of them. Assume that the user would not enter any two numbers which are the same.
let num1 = Number(prompt('Enter  num1'))
let num2 = Number(prompt('Enter  num2'))
let num3 = Number(prompt('Enter  num3'))
if ((num1 > num2) && (num1 > num3)) {
    console.log('num1 is the largest')
} else if ((num2 > num1) && (num2 > num3)) {
    console.log('num2 is the largest')
} else if ((num3 > num1) && (num3 > num2)) {
    console.log('num3 is the largest')
} else if ((num1 != num2 == 0) && (num2 != num3 == 0) && (num3 != num1 == 0)) {
    console.log('number is repeated')
}

//Create a variable called year and enter the a random year. Check if the year is a leap year or not. A leap year is a year that is divisible by 4  not divisible by 100 or divisible  by 400.
let year = Number(prompt('Enter a random year'))
if ((year$4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log('Leap year')
} else {
    console.log('Not a leap year')
}
//Take as input from a user the temperature if the temperature is above 30°C display “The temperature is too high”,if the temperature   is above 15 display “Normal temperature” otherwise display “Cold temperature”
let Tempearture = Number(prompt('Enter Temperature'))
if (Tempearture > 30) {
    console.log('The temperature is too high')
} else if ((Temperature > 15) && (Temperature < 30)) {
    console.log('Normal Temperature')
} else {
    console.log('Temperature too cold')
}
//Write a js program that checks if a variable x is between 10 and 20 (inclusive) and if another variable y is greater than 100. If both conditions are true, display"Conditions met", otherwise display"Conditions not met"
let x = Number(prompt('Enter number'))
let y = Number(prompt('Enter number'))
if ((x >= 10) && (x <= 20) && (y > 100)) {
    console.log('Conditions met')
} else {
    console.log('conditions not met')

}


//Write a js program that checks if a variable password is equal to the string "secret123". If it is, display "Access   granted", otherwise display"Access denied"
let password = 'secret123'
if (pass == password) {
    console.log('Access granted')
} else {
    console.log('Access Denied')
}
//Write a js program that checks if a variable student_score is greater than 90. If true, check if the attendance is greater than 80. If both conditions are true, display"Excellent student", otherwise display "Good score, but attendance needs improvement"

let student_score = Number(prompt('Enter a student score'))
let attendance = Number(prompt('Enter attendance of students'))
if ((student_score > 90) && (attendance > 80)) {
    console.log('Excellent student')
} else {
    console.log("Good score, but attendance needs improvement")
}
//or
let student_score=Number(prompt('Enter score'))
let attendance=Number(prompt('Enter attendance'))
if(student_score>90){
    if (attendance>80){
        console.log('Godd score but needs to be improved')
    }
else{
    console.log('Excellent performance')
}
}
//8.Conditional Statement A student’s final grade is determined by their exam score (an number between 0 and 100) using the rules below: If the score is 70 or above, the grade is A If the score is 60 to 69, the grade is B If the score is 50 to 59, the grade is C If the score is 40 to 49, the grade is D If the score is below 40, the grade is F Task: Write a JavaScript program that: Stores a student’s score in a variable. Uses if, else if, and else statements to determine the grade. Prints the grade to the console.
 let score=Number(prompt('Enter score: '))
if ((score<0)&&(score>100)){
    console.log('Out of the range')
}else if (score >=70){
    console.log('grade A')
}else if((score>60)&& (score<69)){
    console.log('grade B')
}else if((score>50)&&(score<=59)){
    console.log('grade C')
}else if ((score>40)&&(score<49)){
    console.log('grade D')
}else{
    console.log('grade F')
}

    
