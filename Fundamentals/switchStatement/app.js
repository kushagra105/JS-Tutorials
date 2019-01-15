const paymentMethod = 'cash';

switch(paymentMethod) {
    case 'cash':
        console.log(`Your Payment Method is: ${paymentMethod}`);
        break;
    case 'cheque':
        console.log(`Your Payment Method is: ${paymentMethod} we will verify the funds...`);
        break;
    case 'card':
        console.log(`Your Payment method is: ${metodoPago} processing...`);
        break;
    default:
        console.log('Please select a payment Method');
        break;
}

// Asign a variable from a switch case.
const cars = ['Camaro', 'Mustang', 'Challenger'];

const selected = 2;
let car;
switch(selected) {
    case 0:
        car = cars[0];
        break;
    case 1:
        car = cars[1];
        break;
    case 2:
        car = cars[2];
        break;
}
console.log(`Your selected car is ${car}`);