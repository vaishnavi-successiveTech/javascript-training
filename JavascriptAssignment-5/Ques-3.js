//  Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})
const userDetails = [
 {name:"John", age:27, id:1},
  { name: "Raj", age: 23 ,id:2 },
  { name: "Tom", age: 24 ,id:3},
];
const removeKey=(userDetails)=>{
for(let object of userDetails){
    delete object['id'];       // use delete to delete the key.
}
console.log(userDetails);
};
removeKey(userDetails);