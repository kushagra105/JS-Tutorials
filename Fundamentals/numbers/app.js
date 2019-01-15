const number1 = 30;
const number2 = 20;
const number3 = 20.20;
const number4 = .10213;
const number5 = -3;

console.log(number1);

let result;

// addition
result = number1 + number2;
// substraction
result = number1 - number2;
// multiplication
result = number1 * number2;
// Division
result = number1 / number2;
// Modulos
result = number1 % number2;

// Pi
result = Math.PI;

// round
result = Math.round(2.5);

// round up or down (ceil or floor )
result = Math.ceil(2.2);
result = Math.floor(2.2);

// square root
result = Math.sqrt(144);

// absolute
result = Math.abs(-300);

// power
result = Math.pow(8, 3);

// get the minimum number from a list
result = Math.min(3,5,1,2,9,4,2, -3);

// get the max number from a list
result = Math.max(4,1,21,4,15,5,11,5);

// generate a random number
result = Math.random();

// Order of operations
result = 20 + 30 * 2;
result =  ( 20 + 30 ) * 2;


console.log(result);

// 20% Discount from a Shopping Cart
const cartItems = (20 + 20 + 30 + 40);
const discount = (cartItems / 100) * 20;
const totalPay = cartItems - discount;

console.log('Total: ' + cartItems)
console.log('Discount: ' + discount);
console.log('Pay: ' + totalPay);



// Increments or decrements
let score = 5;
score++;
score--;
++score;
--score;

score += 3;
score -= 3;

console.log(score);