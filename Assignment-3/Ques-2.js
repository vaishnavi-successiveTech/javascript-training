// Write a program to display following output as shown in figure
// 1
// 2 3
// 4 5 6
// 7 8 9 10
let val = 1;
let patternResult = "";

for (let i = 1;i < 5;i++ ) { // for rows
  for (let j = 0; j < i; j++) {
    patternResult += val + " ";
    val++;
  }
  patternResult += "\n";
}
console.log(patternResult);

// 1
// 2 2
// 3 3 3
// 4 4 4 4

let result = "";

for (let i = 1;i < 5;i++ ) // for rows
  {
  for (let j = 0; j < i; j++) {
    result += i+ " ";
  }
  result += "\n";
  }
console.log(result);

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let num = prompt("Enter a number"); //  take input from user.

function printPattern(num) {
  if(isNaN(num) || num<=0)
    {
      console.log("Please enter a valid positive number");
      return;
    }// the input should only number
  for (let i = num;i > 0;i--) // for rows
   {
    let res = "";
    for (let j = 1; j < i + 1; j++) {
      res += j;
    }
    console.log(res);
  }
  for (let i = 2; i <= num; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
      res += j;
    }
    console.log(res);
  }
}
printPattern(num);

