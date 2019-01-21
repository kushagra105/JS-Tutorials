   

// CReating a set
// A set is going to a set values without duplicates

let shoppingCart = new Set();
shoppingCart.add('Shirt');
shoppingCart.add('Album #1');
shoppingCart.add('Album #2');
shoppingCart.add('Album #3');
shoppingCart.add('Album #3');
shoppingCart.add('Guitar');
console.log(shoppingCart.size);


// In an aray
let numbers = new Set([1,2,3,4,5,6,7,3,3,3,3]);
console.log(numbers.size);


let shoppingCart = new Set();
shoppingCart.add('Shirt');
shoppingCart.add('Album #1');
shoppingCart.add('Album #2');
shoppingCart.add('Album #3');
shoppingCart.add('Album #3');
shoppingCart.add('Guitar');
console.log(shoppingCart.size);

// Checking a value exists in the set
console.log( shoppingCart.has('Shirt') );

// Delete item from set
console.log( shoppingCart.delete('Shirt') );
console.log(shoppingCart);

// Clean a set
shoppingCart.clear();
console.log(shoppingCart);

// Foreach in a set
shoppingCart.forEach(product =>  {
    console.log(product);
})

// Foreach in a set
shoppingCart.forEach((product, index, isPartOf) =>  {
    console.log(`${index} : ${product}`);
    console.log(isPartOf  === shoppingCart);
})

// Convert a SET Into an array
const shoppingCartArray = [...shoppingCart];
console.log(shoppingCartArray);

   
