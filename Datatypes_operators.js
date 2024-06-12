// Exercise 1: Numbers
// 1.
var numberVariable = 10;

// 2.
var floatingNumber = 2.5;

// 3.
var numberVariable = 15;
var anotherNumber = 20;
var additionResult = numberVariable + anotherNumber;
var subtractionResult = numberVariable - anotherNumber;
var multiplicationResult = numberVariable * anotherNumber;
var divisionResult = numberVariable / anotherNumber;
var modulusResult = numberVariable % anotherNumber;
var exponentionResult = math.pow(numberVariable, anotherNumber);

// 4.
console.log("addition:", additionResult);
console.log("subtraction:", subtractionResult);
console.log("multiplication:", multiplicationResult);
console.log("division:", divisionResult);
console.log("modulus:", modulusResult);
console.log("exponention:", exponentionResult);

// Exercise 2: Boolean Operators
// 1.
var num1 = 25;
var num2 = 70;
var isEqual = num1 === num2;
var isNotEqual = num1 !== num2;
var isGreater = num1 > num2;
var isLess = num1 < num2;
var isGreaterOrEqual =  num1 >= num2;
var isLessOrEqual = num1 <= num2;

// 2.
var x = 8;
var y = 12;
var isGreater = x > y
var isLessOrEqual = x <= y
var isEqual = x = y
var isNotEqual = x !== y

console.log("Is Greater:", isGreater);
console.log(" Is Greater or Equal:", isLessOrEqual);
console.log("Is Equal:", isEqual);
console.log("Is Not Equal:", isNotEqual);

// 3.
var a = true;
var b = false;

var result = a && b;
console.log("Result of 'a AND b':", result);

var result = a || b;
console.log("Result of 'a OR b':", result);

var result = !a;
console.log("Result of 'NOT a':", result);
 
// 4.
var p = 10;
p += 6;
console.log(" P modified by +=:", p);

p -= 4;
console.log("P modified by -=:", p);

p *= 3;
console.log(" P modified by *=:", p);

p /= 5;
console.log(":P modified by /=", p);

p %= 4;
console.log(" P modified by %=:", p);