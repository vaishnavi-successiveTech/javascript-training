//9. Write a program to find the last duplicate index in an array
// using Map
const lastDuplicateIndex = (arr)=> {
  const arrMap = new Map();
  arr.forEach((element, index) => {
    if (arrMap.has(element)) {
      arrMap.set(element, index);
    } else {
      arrMap.set(element, -1);
    }
  });
  // for removing the -1 whose element does not have duplicates
 for(const[key,val] of arrMap){
    if (val === -1) {
      arrMap.delete(key);
    }
  }

  return Array.from(arrMap.values());
}

const arr = [3, 2, 1, 4, 2, 5, 6];
console.log(lastDuplicateIndex(arr));

//  using Set

const lastDuplicate = (arr)=> {
  const arrSet = new Set();
  let ans = -1; // if there is no duplicates then it will return -1.

  for (let i = 0; i < arr.length; i++) {
    if (!arrSet.has(arr[i])) {
      arrSet.add(arr[i]);
    } else {
      ans = i;
    }
  }
  return ans;
}
console.log(lastDuplicate([1, 2, 3, 4, 5, 7])); // for -1
console.log(`the last duplicate value of index is ${lastDuplicate(arr)}`);
