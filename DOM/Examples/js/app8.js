// classes & attributes
const link = document.querySelector('.link');

let element;

element = link;

// Read the Class
element = link.className;

// Read the class as DOM Token List
element = link.classList;

// access to specific class
element = link.classList[0];

// Add a new class
link.classList.add('new-class');

// Remove a class
link.classList.remove('new-class');

// read attributes
element = link.getAttribute('href');
element = link.setAttribute('href', 'facebook.com');
element = link.setAttribute('data-link', '1');
element = link.hasAttribute('data-link');
element = link.removeAttribute('data-link');

element = enlace;

console.log(element);