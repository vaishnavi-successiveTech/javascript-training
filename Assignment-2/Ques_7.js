// All of the above questions from 3-6 needs to be done with arrow functions also

const add = (num, num2) => {
  return num + num2;
};
// function call as an argument
const subtract = (add, num5) => {
  result = num5 - add(4, 7);
  return result;
};

console.log(subtract(add, 19));

//Write a function expression that takes in a number and returns its square.
const square = (n) => n * n;

console.log(square(9));
console.log(square(3));

// Write a function expression that takes in a number and returns true if it's even and false if it's odd.
const evenOdd = (number) => {
  if (number % 2 == 0) return true;
  else return false;
};
console.log(evenOdd(400));
console.log(evenOdd(71));
