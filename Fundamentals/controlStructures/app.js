
// If Operator
const score = 100;

// EQUAL
if(score == 100) {
    console.log("Yes, is the same");
} else {
    console.log("No is not the same");
}

// Not equal
if(score != 100) {
    console.log("Yes, different!");
}  else {
    console.log("Not, not different, values are the same");
}

// Strict comparison Operator
if(score === '1000') {
    console.log("Yes is the same");
} else {
    console.log("Values are not the same");
}

// Strict comparison operator (not equal)
if(score !== 1000) {
    console.log("Yes, is different !");
} else {
    console.log("No, is not differet");
}

// Check if variable has a value
const score = 1000;

if(score) {
    console.log(`Yes, and the score is: ${score}`);
} else {
    console.log('No, there\'s no score');
}

// Check variable exists
if(typeof score != 'undefined' ) {
    console.log(`yes, and the score is ${score}`);
} else {
    console.log('No, there\'s no score');
}

// Other comparison are   <    >      and      >=     <=

let cash = 500;
let cartTotals = 300;

if( cash > cartTotals ) {
    console.log('successful payment');
} else {
    console.log('insufficient funds');
}

// When you have 1 line you can skip curly braces
let cash = 500;
let cartTotals = 300;

if( cash > cartTotals )
    console.log('successful payment');
else
    console.log('insufficient funds');



// else if

let currentTime = 20;
if(currentTime <= 10) {
    console.log('Good Mourning');
} else if(currentTime <= 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');
}

let currentTime = 25;
// Operador && will check both conditions
if(currentTime > 0 && currentTime <= 12 ) {
    console.log('Good Mourning');
}  else if( currentTime > 12 && currentTime <= 18) {
    console.log('Good Afternoon');
} else if( currentTime > 18 && currentTime <= 24) {
    console.log('Good Night');
} else {
    console.log('Invalid...');
}

// Operator  || OR
let cash = 300;
let credit = 300;
let cartTotals = 700;

if(cartTotals < cash || cartTotals < credit ) {
    console.log('You can pay with cash or credit');
} else {
    console.log('Insufficient Funds');
}

// More advanced Example.

let cash = 300;
let credit = 300;
let available = cash + credit;
let cartTotals = 700;

if(cash > cartTotals || credit > cartTotals ) {
    console.log('You can pay with cash or credit');
} else if(available >= cartTotals) {
    console.log('Pay with both!');
} else {
    console.log('Insufficient Funds');
}

// Ternary
let loggedIn = false;
console.log( loggedIn === true ? 'The user is logged in' : 'Not logged, please log in' );