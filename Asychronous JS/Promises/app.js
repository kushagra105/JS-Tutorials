
//The Promise object represents when a function or task is completed (or has failed)
// of an asynchronous operation, and its resulting value.

// Example with promises

const applyDiscount = new Promise(function(resolve, reject) {
    // resolve when the promise is succesful
    // reject when the promise has failed

  // Change to false to run the reject
  const discount = false;
  if(discount) {
      resolve('Discount Applied');
  } else {
      reject('Discount failed...');
  }
});

applyDiscount.then(function(result) {
  console.log(result);
}).catch(function(result) {
  console.log(result);
});

 