// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function CamelString(str) {
 
  let i = 0;
  let result = "";
  let str2 = str.trim();
   let len = str2.length;
  while (i < len) {
    if (str2[i] === " ") {
      result += str2[i + 1].toUpperCase();
      i = i + 2;
    } else {
      result += str2[i];
      i++;
    }
  }
  return result;
}
let str = " hello john doe";
console.log(CamelString(str));
