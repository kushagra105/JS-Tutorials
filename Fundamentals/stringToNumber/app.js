let number1 = "50",
    number2 = 10,
    number3 = 'nine';


console.log(number1 + number2);

// Convert number1 to Number
console.log(Number(number1) + number2);
console.log(parseInt(number1) + number2);

// Convert number 3
console.log(number3);

// This will concatenate the value
console.log(number1 + number2);

// But this will substract the value
console.log(number1 - number2);

// Another Methods
let number = "20";
number = Number("20");
number = Number("20.20102");
number = Number(true);
number = Number(false);
number = Number(null);
number = Number("Hello world");
number = Number([1,2,3,4]);

console.log(number);
console.log(typeof number);

// ParseInt & ParseFloat

number = parseInt("100");
number = parseInt("100.20");
number = parseFloat("100.20");


// ToFixed just for numbers
let number1 = "1209139";
let number2 = 1209139.101213;
console.log(number1.toFixed(4) );
console.log(number2.toFixed(4) );