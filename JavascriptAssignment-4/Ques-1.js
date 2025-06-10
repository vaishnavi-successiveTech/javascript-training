// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const removeDuplicates= (string) => {
  const charSet = new Set(); // declare a set.
  let newStr = ""; // create a new array

  for(let char of string){
    const lowerChar=char.toLowerCase();
    if(!charSet.has(lowerChar)){ // spaces are treated as character.
      charSet.add(lowerChar);
      newStr +=char;
    }
  }
  return newStr;
}
console.log(removeDuplicates("Hello        Yellow")); 

// using 
// const removeDuplicates= (string) => {
//   const str=string.toLowerCase().trim().replace(/\s+/g);
//   const charSet = new Set(); // declare a set.
//   const newStr = []; // create a new array

//   const strArray = str.split("");
//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i] == "") newStr.push(strArray[i]);

//     if (!charSet.has(strArray[i])) {
//       charSet.add(strArray[i]);
//       newStr.push(strArray[i]);
//     }
//   }
//   return newStr.join("");
// }
// console.log(removeDuplicates("Hello Yellow"));