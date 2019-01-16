
// Object Create

const Client = {
    getBalance: function() {
        return `hello ${this.name} ${this.balance}`;
    },
    withdraw: function(amount) {
        return this.balance -= amount;
    },
    deposit: function(amount) {
      return this.balance += amount;
   }
}

// Create a new object called mary and give a balance of 1000
const mary = Object.create(Client);
// Attach mary and balance
mary.name = 'Mary';
mary.balance = 1000;

// Send to the console
console.log(mary);
console.log(mary.getBalance() );

// Withdraw some money
mary.withdraw(500);
console.log(mary.getBalance() );

// Deposit some money
mary.deposit(1200);
console.log(mary.getBalance() );


// Another way...
const juan = Object.create(Client,  {
    name : {value: 'Juan'},
    lastName : {value: 'De la torre'},
    job: {value: 'Web Developer'}
});
console.log(juan.job );