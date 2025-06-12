// async function getData() {
//    setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
// getData().then(function(data) {
//    console.log(data);
// });

async function getData() {
  return new Promise((resolve) => { // return a promise else it is giving a undefined.Async function does not return anything.
    setTimeout(function (data) {
    resolve([1, 2, 3, 4, 5]);
  }, 1000);
  });
}
getData().then(function (data) {
  console.log(data);
});
