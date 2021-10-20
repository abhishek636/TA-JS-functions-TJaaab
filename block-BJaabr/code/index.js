// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue

// function Declaration
function addOne (num){
  return num + 1;
}

// - Write a Function Expression

const addOne = function addOne (num){
  return num + 1;
}

// - Write an Arrow Function without curly brackets(if possible)

const addOne = (num) => num + 1;

// - Write an Arrow Function with curly brackets

const addOne = (num) => {
  return num + 1;
}

// - Execute the function

addOne(5);

// - Execute the function and store the return value in a variable.

let returnValue = addOne(23);

// - What is the typeof returnValue

typeof returnValue =='number'

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue

// function Declaration
function subtractOne (num){
  return num - 1;
}

// - Write a Function Expression

const subtractOne = function addOne (num){
  return num - 1;
}

// - Write an Arrow Function without curly brackets(if possible)

const subtractOne = (num) => num - 1;

// - Write an Arrow Function with curly brackets

const subtractOne = (num) => {
  return num - 1;
}

// - Execute the function

subtractOne(5);

// - Execute the function and store the return value in a variable.

let returnValue = subtractOne(23);

// - What is the typeof returnValue

typeof returnValue =='number'


/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

// function Declaration
function sum (numA, numB){
  return numA + numB;
}

// - Write a Function Expression

const sum = function addition (numA, numB){
  return numA + numB;
}

// - Write an Arrow Function without curly brackets(if possible)

const sum = (numA, numB) => numA + numB;

// - Write an Arrow Function with curly brackets

const sum = (numA, numB) => {
  return numA + numB;
}

// - Execute the function

sum(5, 20);

// - Execute the function and store the return value in a variable.

let returnValue = sum(23, 56);

// - What is the typeof returnValue

typeof returnValue =='number'


/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

// function Declaration
function square (num){
  return num * num;
}

// - Write a Function Expression

const square = function squ (num){
  return num * num;
}

// - Write an Arrow Function without curly brackets(if possible)

const square = (num) => num * num;

// - Write an Arrow Function with curly brackets

const square = (num) => {
  return num * num;
}

// - Execute the function

square(5);

// - Execute the function and store the return value in a variable.

let returnValue = square(10);

// - What is the typeof returnValue

typeof returnValue =='number'



/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

// function Declaration
function isGreater (x, y){
  if(x>y){
    return true
  } else {
    return false;
  }
}

// - Write a Function Expression

const isGreater = function great (x, y){
  if(x>y){
    return true
  } else {
    return false;
  }
}

// - Write an Arrow Function without curly brackets(if possible)

const isGreater = (x, y) => numA + numB;

// - Write an Arrow Function with curly brackets

const isGreater = (x, y) => { if(x>y){
  return true  
} else {
  return false
}
}

// - Execute the function

isGreater(5, 20);

// - Execute the function and store the return value in a variable.

let returnValue = isGreater(23, 56);

// - What is the typeof returnValue

typeof returnValue =='number'


/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write an anonymous Function Expression

// - Write an named Function Expression

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

// function Declaration
// function oddOrEven (x){
//   if(x % 2 == 0){
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// - Write a Function Expression

const oddOrEven = function oe (x){
  if(x % 2 == 0){
    return 'even';
  } else {
    return 'odd';
  }
}