// Write a program to print all even number first and then all odd numbers
let result = "";
function EvenOdd(num) {
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) result += i + "\t";
  }
  for (let j = 1; j < num; j++) {
    if (j % 2 != 0) {
      result += j + "\t";
    }
  }
}

EvenOdd(10);
console.log(result);
