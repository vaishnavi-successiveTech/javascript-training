// 11. var promise = new Promise(function(resolve, reject) {
//    setTimeout(function() { resolve("Data received"); }, 1000);
// });
// promise.then(function(data) {
//    console.log(data);
// }, function(error) {
//    console.log(error);
// });

const promise = new Promise(function (resolve, reject) { // it's better to use const instead of var
  let success = true;
  if (success) {
    setTimeout(function () {
      resolve("Data received");
    }, 1000);
  } else {
    reject("error");
  }
});
promise.then(
  function (data) {
    console.log(data);
  },
  function (error) {
    console.log(error);
  }
);
// No error !!