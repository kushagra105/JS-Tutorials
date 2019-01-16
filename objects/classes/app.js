// In ES6 you will have access to Classes instead of Prototypes

class Client {
    // Create the constructor
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    // Any method inside the class will be added to the prototype...

    // Print client information
    clientInfo() {
        return `Hello ${this.name}, your balance: ${this.balance}`;
    }

    // Membership
    membership() {
        let name;
        if(this.balance > 1000) {
            name = 'Gold';
        } else if(this.balance > 500) {
            name = 'Platinum';
        } else {
            name  = 'Normal';
        }
        return name;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
    // Static methods doesn't require instanciate
    static welcome() {
        return `Welcome to your bank.`;
    }
}

const mary = new Client('Mary', 1000);
console.log(mary);

// Access the methods
console.log(mary.clientInfo() );
console.log(mary.membership() );

// Withdraw some money
mary.withdraw(600);

// Check Again
console.log(mary.clientInfo() );
console.log(mary.membership() );

// This will cause an error since is not parte of current instance...
console.log(mary.welcome() );

// But this will work!
 console.log(Client.welcome());
   
