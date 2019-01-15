// add a new link
const newLink = document.createElement('a');

// add a class
newLink.className = 'link';

// add the href
newlink.href = '#';
newLink.setAttribute('href', '#');

// Add the Text
newLink.appendChild(document.createTextNode('New Link'));

// add the new link to the #primary or #secondary
document.querySelector('#primary').appendChild(newLink);