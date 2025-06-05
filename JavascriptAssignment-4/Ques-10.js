//10. Write a program to concatenate an input of array of arrays
function merge(arr){
    let mergeArray=[];
  for(let i=0; i<arr.length ;i++){
    for(let j=0;j<arr[i].length;j++){
        mergeArray.push(arr[i][j]);
    }
  }
return mergeArray;
}
arr=[[1,2,3],[4,2,1],[8,3,1]];
console.log(merge(arr));

// using flat function of Array.
let arr=[[1,2,3],[4,2,1],[8,3,1]];
let flatArr=arr.flat(2);
console.log(flatArr);