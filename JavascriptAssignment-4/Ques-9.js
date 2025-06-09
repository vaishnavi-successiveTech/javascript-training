//9. Write a program to find the last duplicate index in an array
// using Map
function lastDuplicateIndex(arr) {
  const Arrmap = new Map();
  arr.forEach((element, index) => {
    if (Arrmap.has(element)) {
      Arrmap.set(element, index);
    } else {
      Arrmap.set(element, -1);
    }
  });
  Arrmap.forEach((value, key) => {
    if (value === -1) {
      Arrmap.delete(key);
    }
  });

  return Arrmap;
}

const arr = [3, 2, 1, 4, 2, 5, 6];
console.log(lastDuplicateIndex(arr));

//  using Set

function lastDuplicate(arr) {
  let arrSet = new Set();
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
console.log(lastDuplicate(arr));
