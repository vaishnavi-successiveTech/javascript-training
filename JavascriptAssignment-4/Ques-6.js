//Write a program to find sum of an array
const arr = [2, 5, 23, 4, 5, 9];
const sumArray =(arr)=> {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    if (!isNaN(arr[i])) {
      sum += arr[i];
     
    } else {
      console.log("Error- Array does contain only numbers");
    }
     i++;
  }
  return sum;
}
console.log(sumArray(arr));

// using reduce

console.log(arr.reduce((acc,curr)=>{
  return acc+curr;
},0));