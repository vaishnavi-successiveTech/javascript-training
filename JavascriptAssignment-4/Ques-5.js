// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const camelString = (string) => {
  let str = string.toLowerCase().trim();
  let words = str.split(/\s+/);
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (i == 0) {
      result += words[i];
    } else {
      let temp = words[i];
      temp = temp.charAt(0).toUpperCase() + words[i].slice(1); // John
      result += temp;
    }
  }
  return result;
};
const str = "hello  john doe";
console.log(camelString(str));

// function camelString(str) {
//   let i = 0;
//   let result = "";
//   let str2 = str.trim();
//   let len = str2.length;
//   while (i < len) {
//     if (str2[i] === " ") {
//       result += str2[i + 1].toUpperCase();
//       i = i + 2;
//     } else {
//       result += str2[i];
//       i++;
//     }
//   }
//   return result;
// }
// let str = " hello john doe";
// console.log(CamelString(str));
