//  Write a program to print all even number first and then all odd numbers  using only one iterations

function EvenOdd(num) {
  let even = "";
  let odd = "";
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
        even += i + "\t";
    }
    else {
      odd += i + "\t";
    }
  }
const result=even+odd;
return result;
}
console.log(EvenOdd(20));


