// Create an Object

const person = {
    name: 'Juan',
    lastName: 'De la torre',
    job: 'Web Developer',
    email: 'mail@mail.com'
}

console.log(person);
console.log(person.name);
console.log(person.job);

// Another way but not really common
console.log( person[name] );

// An Object can hold any data type
const person = {
    name: 'Juan',
    lastName: 'De la torre',
    job: 'Web Developer',
    email: 'mail@mail.com',
    age: 20,
    favoriteMusic: ['Trance', 'Rock', 'Grunge'],
    living: {
        city: 'Guadalajara',
        country: 'Mexico'
    },
    birthYear: function() {
        return new Date().getFullYear() - this.age;
    }
}

// Access each element
console.log(person);
console.log(person.name);
console.log(person.favoriteMusic);
console.log(person.living);
console.log(person['living']['city']);

// An Object can contain also functions

// birthYear: function() {
//     return new Date().getFullYear() - this.age;
// }

// Access the function
console.log( person.birthYear() );

// Array of Objects
let cars = [
    {model: 'Mustang', engine: 6.0},
    {model: 'Camaro', engine: 6.1},
    {model: 'Challenger', engine: 6.1},
];

// Iterate in the array of objects

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i].model);
}
    