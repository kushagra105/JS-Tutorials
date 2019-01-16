
// All The Objects in JavaScript will contain a Prototype

Client.prototype;
String.prototype;


// Instead of making your objects full of methods, you can create a prototype
function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

// then attach the prototype
Client.prototype.membership = function() {
    let name;
    if(this.saldo > 1000) {
        name = 'Gold';
    } else if(this.saldo > 500) {
        name = 'Platinum';
    } else {
        name  = 'Normal';
    }
    return name;
}

// Second Protoype with name and balance..
Client.prototype.clientInfo = function() {
    return `Name: ${this.name}, Balance ${this.balance}, Category:  ${this.membership() } `;
}

// Another method to withdraw money from the account
Client.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

// Deposit money
Client.prototype.deposit = function(amount) {
    this.balance += amount;
}

// Check Balance
Client.prototype.getBalance = function() {
    return this.balance;
}

// Instanciate the method
const client = new Client('Karen', 600);

// Then access the prototypes
console.log ( client.membership() );

// Print the client info
console.log ( client.clientInfo() );

// withdraw money
client.withdraw(2000);

// check balance
console.log ( client.getBalance() );

// Deposit
client.deposit(2000);

console.log ( client.getBalance() );


// Check for properties...
console.log(client.hasOwnProperty('getBalance'));
console.log(client.hasOwnProperty('clientInfo'));
