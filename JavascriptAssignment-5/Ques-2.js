//Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const sortObject = (userDetails) => {
  userDetails.sort((a, b) => {
    const ageA = typeof a.age === "number" ? a.age : "Infinity";
    const ageB = typeof b.age === "number" ? b.age : "Infinity";
    return ageA - ageB;
  }); // ascending order on basis of age.
  // compare and swap the value
  if (userDetails.length === 0) {
    // if user details not available.
    console.log("User Details are not available");
  }
  for (let ele of userDetails) {
    console.log(ele);
  }
};
const userDetails = [
  { name: "Harry" },
  { name: "John", age: 54 },
  { name: "Raj" }, // if value is not available
  { name: "Tom", age: 24 },
];
sortObject(userDetails);
