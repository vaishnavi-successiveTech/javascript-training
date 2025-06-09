// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")
function CountOccurence(string) {
  let str=string.toLowerCase();
  let mapAlphabets = new Map(); // Map declare
  for (let i = 0; i < str.length; i++) {
    if ( mapAlphabets.has(str[i])) {
       mapAlphabets.set(str[i], mapAlphabets.get(str[i]) + 1); // for frequency
    } else {
       mapAlphabets.set(str[i], 1);
    }
  }
  let resStr = " ";
  for (let [key, val] of  mapAlphabets) {
    resStr = resStr + key + val;
  }
  return resStr;
}

const str = "abcabcdabbcc";
console.log(CountOccurence(str));
