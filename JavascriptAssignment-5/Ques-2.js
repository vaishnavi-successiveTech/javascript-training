//Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const userDetails = [
  { name: "John", age: 54 },
  { name: "Raj", age: 23 },
  { name: "Tom", age: 24 },
];
userDetails.sort((a, b) => a.age - b.age); // ascending order on basis of age.
// compare and swap the value

for (let ele of userDetails) {
  console.log(ele);
  
}
