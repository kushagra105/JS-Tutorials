
// Instead of creating iterators by hand you can use a generator
// You indicate a generator with the asterisk before the function name

// generator

function *createGenerator() {
    // Yield is a new keyword in ES6
    yield 1;
    yield 'Name of th eperson';
    yield 3 + 3;
    yield true;
}
// They're executed as standard functions but the return value is a iterator
const iterator = createGenerator();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


// Create a second generator
function *newGenerator(cart) {
    for( let i = 0; i < cart.length; i++) {
        yield cart[i];
    }
}
// Shopping cart
const cart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

// Loop iterator
let iterator = newGenerator(cart);

console.log(iterator.next() );
console.log(iterator.next() );
console.log(iterator.next() );
console.log(iterator.next() );
console.log(iterator.next() );
   