// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function CamelString(str) {
  let len = str.length;
  let i = 0;
  let result = "";
  while (i < len) {
    if (str[i] === " ") {
      result += str[i + 1].toUpperCase();
      i = i + 2;
    } else {
      result += str[i];
      i++;
    }
  }
  return result;
}
let str = "hello john doe";
console.log(CamelString(str));
