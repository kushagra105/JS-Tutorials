// Replace an element
const newHeading = document.createElement('h2');

// add an id
newHeading.id = 'heading';

// add a new text
newHeading.appendChild(document.createTextNode('The Best Courses'));

// Select the old element
const oldHeading = document.querySelector('#heading');

// Parent
const body = document.querySelector('body');

// Then, Replace (first the new element, then the old)
body.replaceChild(newHeading, oldHeading);