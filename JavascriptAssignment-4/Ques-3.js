// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")
function CountOccurence(str) {
  let digMap = new Map(); // Map declare
  for (let i = 0; i < str.length; i++) {
    if (digMap.has(str[i])) {
      digMap.set(str[i], digMap.get(str[i]) + 1); // for frequency
    } else {
      digMap.set(str[i], 1);
    }
  }
  let resStr = " ";
  for (let [key, val] of digMap) {
    resStr = resStr + key + val;
  }
  return resStr;
}

let str = "abcabcdabbcc";
console.log(CountOccurence(str));
