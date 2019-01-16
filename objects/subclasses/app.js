
// In ES6 you can inherit a class, constructor and properties really easy..

class Client {
    // Create the constructor
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    // Print client information
    clientInfo() {
        return `Hello ${this.name}, your balance: ${this.balance}`;
    }
    // Static methods doesn't require instanciate
    static welcome() {
        return `Welcome to your bank.`;
    }
}

class Business extends Client {
    constructor(name, balance, phone, category) {
        // Access the parent constructor properties...
        super(name, balance);

        // New attributes require this.
        this.phone = phone;
        this.category = category;
    }
    // Print client information
    clientInfo() {
        return `Hello ${this.name}, your balance: ${this.balance}, Category: ${this.category}`;
    }

    // Print the balance...
    balance() {
       return this.balance ;
    }

    static welcome(){
        return `Welcome to Bank for Business`;
    }
}

// Instanciate and call the methods...
const john = new Client('John', 3000);
console.log(john);
console.log(john.clientInfo() );

// Instanciate the subclass
const business = new Business('Business Name', 10000, 10290193, 'Real State');

// Since this is a subclass you have access to the methods...
// if you remove the method from the subclass, the parent method will be loaded...
console.log(business.clientInfo() );
console.log(business.balance() );

// You can still have access to both static methods...
console.log(Client.welcome() );
console.log(Business.welcome() );