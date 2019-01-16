
// You can create objects with 2 methods
// The first one is called the object literal
// Object Literal
const client = {
    name: 'Juan',
    balance: 2000,
    membership : function() {
           let name;
           // Check different Balance
           if(this.balance > 1000) {
              name = 'Gold';
           } else if(this.saldo > 500) {
              name = 'Platinum';
           } else {
              name  = 'Normal';
           }
           return name;
    }
 }
 console.log(client);
 console.log(client.name);
 console.log(client.balance);
 console.log(client.membership() );
 
 // The second method is know as the constructor and this one is more
 // powerful and will provide more dynamic behaviour
 
 // Object Constructor
 function Client(name, balance) {
     this.name = name;
     this.balance = balance;
     this.membership = function() {
         let name;
 
         // check for the different balances
         if(this.saldo > 1000) {
             name = 'Gold';
         } else if(this.saldo > 500) {
             name = 'Platinum';
         } else {
             name  = 'Normal';
         }
         return name;
     }
 }
 
 const person = new Client('Juan', 2000);
 const person2 = new Client('Karen', 600);
 
 // You can access the method with this code
 
 console.log(person.membership() );