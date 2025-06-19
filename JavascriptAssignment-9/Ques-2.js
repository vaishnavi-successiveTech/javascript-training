// 2.Install the lodash package using npm install lodash. and use any of its function.

import lodash from "lodash";

// pullAll- Array elements

let numbers = [1, 2, 3, 1, 2, 3, 4, 2];
lodash.pullAll(numbers, [1, 2]);
console.log(numbers);

