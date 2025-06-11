//13. Write a program to return inverse of an array

const inverseArray=(arr)=> {
  const maxVal=Math.max(...arr);
  let inverse =new Array(maxVal+1).fill(null); // prefilled array wiyth null
  for (let i = 0; i < arr.length; i++) {
    inverse[arr[i]] = i;
  }
  return inverse;
}
const arr = [2, 4, 1, 5, 3, 0,9];
console.log("original array:" , arr);
console.log("inversed array:",inverseArray(arr));



