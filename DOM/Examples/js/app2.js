// Selecting DOM Elements
console.log(document.getElementById('heading'));

// Retrieve id or class from heading
console.log( document.getElementById('heading').id );
console.log( document.getElementById('heading').className );

// Change the CSS
let heading = document.getElementById('heading');
heading.style.background = '#333';
heading.style.color = '#FFF';
heading.style.padding = '20px';

// Change the Text
heading.textContent = 'The best courses';
// Alternative way
heading.innerText = 'Learn from the Experts';

// Query SELECTOR with ID
const learnHeading = document.querySelector('#learn');


// Query Selector with Class
const tagline = document.querySelector('.tagline');

// Query selector with Tag
const heading = document.querySelector('h1');

// If there're different elements query selector will return the first
let card = document.querySelector('.card');

// Nesting like CSS
let image = document.querySelector('.card img');

// li:nth-child(3)  or li:last-child  or li:first-child

let link = document.querySelector('#primary a:last-child');
let link = document.querySelector('#primary a:nth-child(2)');
let link = document.querySelector('#primary a:first-child');
