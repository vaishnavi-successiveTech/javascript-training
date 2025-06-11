//10. Write a program to concatenate an input of array of arrays

// using recursion 
const concatenateArray= (arr)=> {
  let newArr=[];
  for(const i of arr){
    if(Array.isArray(i)){
      newArr=newArr.concat(concatenateArray(i)); 
    }
    else{
      newArr.push(i);
    }
  }
return newArr;

}
console.log(concatenateArray([
  [1, 2, 3],
  [4, 2, 1],
  [8, 3, 1],
]));


// using flat function of Array.
const array = [
  [1, 2, 3],
  [4, 2, 1],
  [8, 3, 1],
];
let flatArr = array.flat(2);
console.log(flatArr);


// function merge(arr) {
//   let mergeArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       mergeArray.push(arr[i][j]);
//     }
//   }
//   return mergeArray;
// }
// const arr = [
//   [1, 2, 3],
//   [4, 2, 1],
//   [8, 3, 1],
// ];
// console.log(merge(arr));





