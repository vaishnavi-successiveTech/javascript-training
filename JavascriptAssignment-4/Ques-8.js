//  Write a program to remove dupliacte elements from an array

function removeDuplicatesArray(arr) {
  let charSet = new Set(); // declare a set.
  let newArr=[];
  for(let i=0;i<arr.length;i++){
    if(!charSet.has(arr[i])){
        charSet.add(arr[i]);
        newArr.push(arr[i]);
    }
  }
  return newArr;
}
let arr=[5,3,3,4,2,1];
console.log(removeDuplicatesArray(arr));
