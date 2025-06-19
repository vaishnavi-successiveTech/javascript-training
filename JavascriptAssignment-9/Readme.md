# Introduction of Lodash
- Lodash is a tool for JavaScript that makes your code easier and faster to write. 
- It gives you ready-made functions to do common tasks, like working with arrays, objects, and strings.

# Why Use Lodash?
- Simplifies complex tasks: It has functions that do complicated things, like merging two objects or sorting an array.
- Cross-browser support: Lodash works in almost all web browsers without problems.

# Array Built-in Examples

- #### _.pullAll: _.pullAll removes specific values from an array.
```
let array = [1, 2, 3, 4, 5, 6];
_.pullAll(array, [2, 4, 6]);

console.log(array); // Output: [1, 3, 5]
```
- #### _.chunk: If you want to break an array into smaller parts
``` 
Example: const array = [1, 2, 3, 4, 5];

console.log(_.chunk(array, 2));
```

# Installation
```bash 
Install via npm:-
npm install lodash

Import in your code:-
const _ = require('lodash');
```

# License
This project is licensed under the [MIT License](https://raw.githubusercontent.com/lodash/lodash/4.17.21/LICENSE).

# Helpful Links
- [Loadash](https://lodash.com/)
- [Docs](https://lodash.com/docs/4.17.15)
- [Lodash-es](https://www.npmjs.com/package/lodash-es)
