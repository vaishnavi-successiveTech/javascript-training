//Write a program to find sum of an array
function SumArray(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}
const arr = [2, 5, 23, 4, 5, 9];
console.log(SumArray(arr));
