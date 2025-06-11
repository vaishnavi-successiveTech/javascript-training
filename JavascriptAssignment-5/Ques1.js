// Write a program to iterate over object.

const printUserDetails = (obj) => {
  for (let key in obj) {
    console.log(`the key of object ${key} and the value :"${obj[key]}"`);
  }
};
const obj = {
  name: "John",
  age: 18,
  country: "India",
  city: "Delhi",
};

printUserDetails(obj);
// using another object we can iterate the first with spread operator.
// const obj2={...obj};
// console.log(obj);
