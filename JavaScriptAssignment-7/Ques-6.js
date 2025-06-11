//6. Implement a function that returns a resolved Promise after a specified delay using async/await

function showAfter4Sec() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (1) {
        resolve("resolved");
      } else {
        console.log("rejected", reject);
      }
    }, 4000);
    
  });
  return promise;
}
async function showSync() {
  try {
    console.log("Promise calling");
    const result = await showAfter4Sec();
    console.log("hi! there");
    console.log(result);
    console.log("Resolved occurr");
  } catch {
    console.log("error occurred");
  }
}

showSync();
