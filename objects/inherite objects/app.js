  

function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

// Create the prototype
Client.prototype.clientInfo = function() {
    return `Name: ${this.name}, Balance: ${this.balance} } `;
}

// instanciate, then run the method
const client = new Client('Juan', 1000);
console.log( client.clientInfo() );


// Business
function Business(name, balance, phone, category) {
   // in this case you don't use this, you should use .call
    Client.call(this, name, balance);

    this.phone = phone;
    this.category = category;
}

// Inherit client info
Business.prototype = Object.create(Client.prototype);

// Return the prototype for Business
Business.prototype.constructor = Business;

// Create a Business
const business = new Business('Udemy', 1000000, 0124653, 'Education');
console.log(business);

// Attach a new Prototype with all the properties
Business.prototype.businessInfo = function() {
    return `Hello from proto Business ${this.name}, balance is: ${this.balance} & category: ${this.category}`;
}

// Test the previous Prototype
console.log(business.businessInfo() );
   
