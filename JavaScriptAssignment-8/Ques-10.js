/* function getData(callback) {
   setTimeout(function() { callback([1, 2, 3, 4, 5]); }, 1000);
}
getData(function(data) {
   console.log(data.length);
}); */
function getData(callback) {
  setTimeout(function () {
    callback([1, 2, 3, 4, 5]);
  }, 1000);
}
getData(function (data) {
    for(let i of data){ // the function name is to get data. So we have to print the data.
        console.log(i);
    }
  console.log(`the length of the array is :${data.length}`); 
});
