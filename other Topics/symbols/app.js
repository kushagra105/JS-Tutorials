// Symbol

// Symbols are new in ES6, They will create a unique value in JavaScript

//  Creating a symbol

const sym = Symbol();
const sym2 = Symbol('sym');

// Symbols are always different

// console.log( Symbol() === Symbol() );

// Unique object keys
let firstName = Symbol();
let lastName = Symbol();

// create empty object
let person = {}

// Attach symbol into Object
person[firstName] = 'Juan';
person[lastName] = 'De la torre';

// Standard properties
person.membership = 'Premium';
person.amount = 500;
console.log(person);
console.log(person[firstName]);

// You cannot access a symbol in a for loop
for(let i in person) {
    console.log(`${i} : ${person[i]}`);
}

// You can also a symbol description
/*
let clientName = Symbol('Client Name');
let client = {};

client[clientName] = 'Peter';


// Test
console.log(client);
console.log(client[clientName]);
console.log(clientName);

*/
