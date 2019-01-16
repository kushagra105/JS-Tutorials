   

// String
const name1 = 'Karen';
const name2 = new String('Karen');

console.log(typeof name1);
console.log(typeof name2);

// try with name1 & 2
if(name1 === name2) {
    console.log('Yes');
} else {
    console.log('No');
}

// Numbers
const number1 = 20;
const number2 = new Number(20);

// boolean
const boolean1 = true;
const boolean2 = new Boolean(true);

// Functions
const function1 = function(a, b) {
    return a + b;
}

const function2 = new Function('a','b', 'return a + b');

console.log(function2(1, 2));

// Objects
const person1 = {name: 'Juan'};
const person2 = new Object({name: 'Juan'});

// Arrays
const array1 = [1,2,3,4];
const array2 = new Array(1,2,3,4);