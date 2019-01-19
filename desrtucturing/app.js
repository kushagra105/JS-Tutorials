// Destructuring

// Destructuring will extract values from a javascript object

// This code has the deavantage that if you have multiple properties you have to create a bunch of variables

// Example using normal javascript
const client = {
    name : 'Alexa',
    membership: 'Premium'
}


let name = client.name,
    membership = client.membership;

 console.log(name);
 console.log(membership);


// Destructuring
const client = {
    name : 'Alexa',
    membership: 'Premium'
}
// Assignt the variables
let {name, membership} = client;
console.log(name);
console.log(membership);


// Object values
const client = {
    name : 'Alexa',
    membership: 'Premium'
};

name = 'Mary',
membership = 'Platinum';


({name, membership} = client);
console.log(name);
console.log(membership);


// Extract object that's inside another object...
const client = {
    membership: 'Premium',
    name : 'Paul',
    data: {
        clientLocation: {
            city: 'Mexico',
            country: 'Mexico'
        },
        acount: {
            memberSince: '10-12-2012',
            balance: 4000
        }
    }
};

// Read data from object

let { data: {clientLocation}} = client;
console.log(clientLocation.city);
console.log(clientLocation.country);

let { data: {account}} = client;
console.log(account.memberSince);
console.log(account.balance);


// Default values

let client = {
    name : 'Peter',
    membership : 'Premium',
    balance : 3000
};

let {name, membership, balance = 0} = client;

console.log(name);
console.log(membership);
console.log(balance);


// Destructuring an array
let cities = ['London', 'New York', 'Madrid', 'Paris'];

const [
    firstCity,
    secondCity
] = cities;
console.log(firstCity);
console.log(secondCity);


// Add an space to skip that value
const [ , , , paris] = cities;
console.log(paris);



// More in Depth example
let client = {
    membership: 'Premium',
    balance: 30000,
    data: {
        name: 'Paul',
        lastName: 'Banks',
        living: {
            city: 'Mexico',
            country: 'Mexico'
        }
    },
    lastMovements: ['12-03-2018', '10-03-2018', '08-03-2018']
};

let {
    data: {living},
    lastMovements: [first]
} = client;

console.log(living);
console.log(living.city);
console.log(first);

//Destructuring functions old method
function reservation(completo, options) {
    options = options || {};
    let payment = options.paymentMethod,
        amount = options.amount,
        days = options.days;

        console.log(payment);
        console.log(amount);
        console.log(days);
}

//2do argument are the options
reservation(
    true,
    {
        paymentMethod: 'creditCard',
        amount: 2000,
        days: 3
    }
);

// Destructuring functions new method
function reservation(complete, options) {
    let {paymentMethod, amount, days} = options;

    console.log(paymentMethod);
    console.log(amount);
    console.log(days);
}

// Destructuring functions with default parameters
function reservation(cancel,
        {
            paymentMethod = 'cash',
            amount = 0,
            days = 0
        } = {}
    ) {


    console.log(paymentMethod);
    console.log(amount);
    console.log(days);
}
//2nd argument are the options as an object
reservation(
    false,
    {
        paymentMethod: 'card',
        amount: 2000,
        days: 3
    }
);
