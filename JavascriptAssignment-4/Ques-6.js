//Write a program to find sum of an array
const sumArray =(arr)=> {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    if (!isNaN(arr[i])) {
      sum += arr[i];
      i++;
    } else {
      console.log("Error- Array does contain only numbers");
    }
  }
  return sum;
}

console.log(sumArray(arr));
const arr = [2, 5, 23, 4, 5, 9];
// using reduce

console.log(arr.reduce((acc,curr)=>{
  return acc+curr;
},0));