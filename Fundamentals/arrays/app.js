// Creating an array
const numbers = [10,20,30,40,50];
console.log(numbers);

// Array of Months
const months = new Array('January', 'February', 'March', 'April', 'May', 'June');
console.log(months);

// Array with mixed values and data types!
const mixedArray = ["Hello", 10, true, "Yes", null];
console.log(mixedArray);

// Array methods
// Check the length in an array
console.log(months.length);

// Check if is an array
console.log(Array.isArray(months));

let name = 'Juan';
console.log(Array.isArray(name));

// Access any element in the array
console.log(months[0]);
console.log(months[3]);

// Change Values in the array
months[3] = 'December';
console.log(months);

// Find any element in the array
console.log(months.indexOf('December'));

// Add any element in the end of the array
months.push('Noviembre');

// Add element at the beginning of the array
months.unshift('Mes 0');

// Remove element from the end
months.pop();

// Remove element from the beggining
months.shift();

// Remove from specific position
// Splice takes 2 parameters, first one is the position,
// second one, how many elements you want to remove
months.splice(0,2);

// Reverse
months.reverse();
console.log(months);

// Concatenate two arrays in JavaScript
const array1 = [1,2,3];
const array2 = [9,8,7];
console.log(array1.concat(array2));

// order an array
let fruits = ['Banana', 'Apple', 'Strawberry', 'Orange', 'WaterMelon'];

fruits.sort();
console.log(fruits);

// Order numbers
const arrayNumbers = [1,3,100,4,6,7,3,2,14,67];

// Order from lower to greater
arrayNumbers.sort(function(x, y) {
    return x - y;
});

// Order from greater to lower
arrayNumbers.sort(function(x, y) {
    return y - x;
});

console.log(arrayNumbers);