
let todoList = ['Homework', 'Food', 'Project', 'Learn JS'];
for(let i = 0; i < todoList.length; i++) {
    console.log(todoList[i] );
}

// loop an array with foreach
todoList.forEach(function(assignment, index) {
    console.log(`${index} : ${assignment}`);
});

// Loop with MAP
const shoppingCart = [
    {id: 1, product: 'Book' },
    {id: 2, product: 'Shirt'},
    {id: 3, product: 'Album'}
];

const productName = shoppingCart.map(function(shoppingCart) {
    return shoppingCart.product;
});
// This will extract just the product name in a new array.
console.log(productName);

// Iterators in ES6
let myCar = {
    model: 'Camaro',
    engine: '6.0',
    yeah: 1969,
    make: 'Chevrolet'
}

for(let key in myCar) {
    console.log(`${key}: ${myCar[key]}`);
}