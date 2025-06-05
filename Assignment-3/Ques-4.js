// Write a program to print all even number first and then all odd numbers
function EvenOdd(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) result += i + " ";
  }
  for (let j = 1; j < num; j++) {
    if (j % 2 != 0) {
      result += j + " ";
    }
  }
  return result;
}

const finalResult = EvenOdd(10);
console.log(finalResult);
