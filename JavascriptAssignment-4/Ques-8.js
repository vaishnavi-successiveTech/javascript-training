//  Write a program to remove dupliacte elements from an array
const arr = [5, 3, 3, 4, 2, 1];
const removeDuplicatesArray= (arr)=>{
  const charSet = new Set(); // declare a set.
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!charSet.has(arr[i])) {
      charSet.add(arr[i]);
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicatesArray(arr));

// by using spread operator 

const removeDuplicates =(arr)=>{
  return [...new Set(arr)];  // using spread operator we can directly push the element in Set
}
console.log(removeDuplicates(arr));
