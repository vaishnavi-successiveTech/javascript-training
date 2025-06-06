//13. Write a program to return inverse of an array

function inverseArray(arr) {
  let inverse = [];
  for (let i = 0; i < arr.length; i++) {
    inverse[arr[i]] = i;
  }
  return inverse;
}
let arr = [2, 4, 1, 5, 3, 0];
console.log(arr);
console.log(inverseArray(arr));
