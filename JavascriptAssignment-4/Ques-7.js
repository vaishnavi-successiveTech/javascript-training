// 7. Write a program to find index of duplicate elements in an array
const arr = [8, 9, 8, 2, 3, 1, 2, 1, 9, 5, 8];

const indexOfDuplicates= (arr)=> {
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        console.log(`The element ${arr[i]} is duplicate at ${j}`);
      }
    }
  }
}

indexOfDuplicates(arr);

// using set

const indexOfDuplicatesValue=(arr)=> {
  const charSet = new Set(arr);
  for (let Arr of charSet) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == Arr) {
        count++;
        if (count > 1) {
          console.log(` the ${Arr} is repeated at ${j}`);
        }
      }
    }
  }
}
indexOfDuplicatesValue(arr);
