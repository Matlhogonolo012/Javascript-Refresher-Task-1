// Exersice 1: Temperature Check
// 1.
var temperature = 20
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15){
    console.log("It's cold")
}  else if (temperature >= 16 && temperature <= 25) {
    console.log("it's mild")
} else (temperature > 25) {
    console.log ("It's warm")
}
 // 2.
 var temperature = 20
 switch (true) {
    case temperature < 0:
        console.log("It's freezing!");
        break;
    case temperature >= 0 && temperature <= 15:
        console.log("It's cold");
        break;
    case temperature >= 16 && temperature <= 25:
        console.log("it's mild")
        break; 
    default: temperature > 25;
        console.log ("It's warm");
        break;
 }

 //Exercise 2: Divisibility Check
 // 1.
 var number = 10;

 if ( number % 2 === 0 && number % 3 === 0) {
    console.log ("Divisible by both");
 } else if (number % 2 === 0) {
    console.log("Divisible by 2");
 } else if ( number % 3 ===0) {
    console.log("Divisible by 3");
 } else {console.log("Not divisible by either 2 or 3")}

 // 2.

 var number = 10;

 switch (true) {
    case number % 2 === 0 && number % 3 === 0:
        console.log ("Divisible by both");
        break;
    case number % 2 === 0:
        console.log("Divisible by 2");
        break;
    case number % 3 ===0:
        console.log("Divisible by 3");
        break;
    default: console.log("Not divisible by either 2 or 3")
 }
 // Exercise 3: For loops

 // 1.
 for (let i = 1; i <= 10; i ++) {
    console.log(i)
 }

// 2.
for (let i = 2; i <= 20; i += 2) {
    console.log(i)
 }

 // 3.
 let sum = 0;
 for (let i = 1; i <= 100; i ++) {
    console.log("sum of all numbers from 1 to 100")
 }

 // 4.

const numbers = (1,2,3,4,5);
console.log("element")
for (let i = 0; i < numberss.length; i++){
    console.log("numbers(i)")
}

// 5.
const numbers = (3,7,2,5,10,6)
let maxNumber = numbers(0);
for (let i=1; i< numbers.leght; i++){
    if (numbers (i) > maxNumber) {
        console.log("largest number in array")
    }
}

// Exercise 4: While loops
// 1.
let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}
// 2.
let number = 2;
while (number <= 20){
    console.log("number");
    number += 2;
}
// 3.
let number = 1;
let sum = 0;
while (number <= 100){
    sum += number;
    number++;
}
// 4.
let number = 5;
while (number <50){
    console.log(number);
    number+= 5;
}
// Exercise 5: Do while loops
// 1.
let number = 1;
do {
    console.log("number");
    number++;
} while (number <= 10);

// 2.
 let number = 1
 let sum = 1
 do{
    sum =+ number;
    number++;
    while (number <=100)
    console.log("sum of numbers from 1 to 100")
 }
 // 3.
 let sum = prompt ("pleaseenter a number greater than 10");
 while (isNaN (num) || num <= 10) {
    num = promt ("Try again")
 }

 // 4.
 const randomNumber = math.random () * 10 + 1;
 let Gamer; while (true) {
    Gamer = parseInt(prompt("guess a number between 1 and 10"))
 }