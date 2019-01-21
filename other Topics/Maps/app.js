
// MAPS
// Ordered lists with a key and a value, can hold any value
// cualquier tipo.

let client = new Map();

client.set('name', 'Karen');
client.set('membership', 'Premium');
client.set('balance', 3000);

console.log(client);

// access the values
console.log(client.get('name'));
console.log(client.get('membership'));
console.log(client.get('balance'));


// Map Methods

// Map Size
console.log(client.size);

// Check if value exists
console.log(client.has('membership'));
console.log(client.get('membership'));

// Delete
client.delete('name');
console.log(client.has('name'));
console.log(client.get('name'));
console.log(client.size);

// Delete Map
client.clear();
console.log(client);

// Default values into map
const patient = new Map([['name', 'patient Name'], ['room', 'not defined']]);

patient.set('name', 'Paul');
// patient.set('room', 400);
console.log(patient);


// For each into map
client.forEach((data, index) => {
    // console.log(data);
    console.log(`${index}: ${data}`);
});

