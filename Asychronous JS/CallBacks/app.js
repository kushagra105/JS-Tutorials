
/*
callbacks are the the cornestone of asynchronous programming in javascript
We have already write a lot of callbacks!

A callback is just a function inside another function
*/

// Callbacks!

const cities = ['London', 'New York', 'Madrid', 'Paris', 'Berlin'];

// Inline Callback
cities.forEach(function(city) {
   console.log(city);
});

// Same callback with a function declaration
function callback(city) {
   console.log(city);
}
cities.forEach(callback);


// Let's create an array of countries
const countries = ['France', 'Spain', 'Portugal', 'Australia', 'England', 'Ireland'];

// Then we add a new country 2 seconds later

function newCountry(country, callback) {
    setTimeout(function() {
        // Add into the array
        countries.push(country);

        // Execute the callback
        callback();
    }, 2000  );
}


// The countries are displayed after 1 second
function displayCountries() {
    setTimeout(function() {
        let html = '';
        countries.forEach(function(country) {
            html += `<li>${country}</li>`;
        });
        document.body.innerHTML = html;
    }, 1000 );
}

// Add a new Country
newCountry('Germany', displayCountries);

// Print them all
displayCountries();