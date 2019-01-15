let name = 'Juan'
name = 20;
name = true;
name = undefined;
name = Symbol('Hello');
console.log(typeof name);

// Let's review the other data types
const name = "Juan";
console.log(typeof name );

// Numbers
let number;

number =  20;
console.log(typeof number );
number = "20";
console.log(typeof number );

// Boolean
let learningJS = true;
console.log(typeof learningJS );

// Null
// will return object
let bankSavings = null;
console.log(typeof bankSavings );

// Undefined
let person;
console.log(typeof person );

// Symbol (ES6)
let symbolES6 = Symbol('this is a symbol');
console.log(typeof symbolES6);

// Reference (Objetos)
// Arrays
let languages = ['HTML5', 'JS', 'PHP'];
console.log(typeof languages);

// Objects
let person = {
    name: 'Juan',
    city: 'mexico'
}
console.log(typeof person);

// Dates
let today = new Date();
console.log(typeof today);