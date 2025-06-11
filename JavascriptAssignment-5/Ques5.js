// 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const flattenObject = (obj, prefix = "", result = {}) => {
  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] == "object" && obj[key] !== null) {
      flattenObject(obj[key], newKey, result); // if it is object then call the function again and call the object[key] basically value of the current object key
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};
const obj = {
  a: 1,
  b: { c: 2, d: [3, 4] },
};


console.log(flattenObject(obj));
//Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }
