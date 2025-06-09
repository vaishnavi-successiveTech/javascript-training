//12. Write a program to display intersection of two array
function  intersectionSet(arr1,arr2){
  let ans=[];
  let charSet=new Set(arr1);
  for(let i=0;i<arr2.length;i++){
    if(charSet.has(arr2[i])){
      ans.push(arr2[i]);
      charSet.delete(arr2[i]);
    }
  }
  return ans;
}
const arr1 = [8, 4, 2, 1, 4];
const arr2 = [3, 2, 1, 4, 2];
console.log(intersectionSet(arr1, arr2));




// using two for-loops.
// function intersection(arr1, arr2) {
//   let ans = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j] && !ans.includes(arr1[i])) {
//         ans.push(arr1[i]);
//       }
//     }
//   }
//   return ans;
// }
// let arr1 = [8, 4, 2, 1, 4];
// let arr2 = [3, 2, 1, 4, 2];
// console.log(intersection(arr1, arr2));
