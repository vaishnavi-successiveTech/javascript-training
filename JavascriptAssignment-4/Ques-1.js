// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

function removeDuplicates(str) {
  let charSet = new Set(); // declare a set.
  let newStr = []; // create a new array

  let strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] == " ") newStr.push(strArray[i]);

    if (!charSet.has(strArray[i])) {
      charSet.add(strArray[i]);
      newStr.push(strArray[i]);
    }
  }
  return newStr.join("");
}
console.log(removeDuplicates("hello yellow Wolley"));
