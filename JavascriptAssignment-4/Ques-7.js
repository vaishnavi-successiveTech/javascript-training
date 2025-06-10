// 7. Write a program to find index of duplicate elements in an array
const arr = [8, 9, 8, 2, 3, 1, 2, 1, 9, 5, 8];

const indexOfDuplicatesVal =(array)=>{
 const len =array.length;

 const unique= new Map();
 const duplicate=new Map();

 array.forEach((element,index) => {
  if(unique.has(element)){
    duplicate.set(element,index);
  }
  else{
    unique.set(element,index);
  }
  
 });
 for(const [key,val] of duplicate){
  console.log(`${key} duplicate at index ${val}`);
 }
}
indexOfDuplicatesVal(arr);

//using for loop.

const indexOfDuplicates= (arr)=> {
  const resArr = [];
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
