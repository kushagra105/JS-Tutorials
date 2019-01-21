// Entries Iterador

const cities = ['London', 'New York', 'Madrid', 'Paris'];
const orders = new Set([123, 231, 131, 102]);
const data = new Map();
data.set('learning', 'JavaScript');
data.set('JSisGreat', true);

// entries
for( let entry of cities.entries() ){
    console.log(entry);
}

// entries
for( let entry of orders.entries() ){
    console.log(entry);
}

// entries
for( let entry of datos.entries() ){
    console.log(entry);
}

// Values iterator
// values
for(let value of cities.values()) {
    console.log(value);
}

// values
for( let value of orders.values() ){
    console.log(value);
}

// values
for( let value of datos.values() ){
    console.log(value);
}


// Keys iterator
// keys
for(let keys of cities.keys() ) {
    console.log(keys);
}

// keys
for( let keys of orders.keys()  ){
    console.log(keys);
}

// keys
for( let keys of datos.keys()  ){
    console.log(keys);
}


// Default
for(let city of cities) {
    console.log(city);
}

for( let order of orders){
    console.log(order);
}

for( let info of data){
    console.log(info);
}

// Iterate an string
const message = 'Learning JavaScript';

// Old WAY
for( let i = 0; i < message.length; i++ ) {
    console.log(message[i]);
}

// new way
for( let char of message) {
    console.log(char);
}

// Iterate a node list
const anchors = document.getElementsByTagName('a');

for (let anchor of anchors) {
    console.log(anchor.href);
}