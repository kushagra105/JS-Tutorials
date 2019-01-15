// Window Object, type this in the window.

window

// You don't have to type console.log or alert with window since they're part of the global in javascript

window.console.log('hello');
window.alert("alert!");

// Prompt
const name = prompt('Your Name?');

// Confirm
if(confirm('Are you sure ?')) {
    console.log('Deleted...')
} else {
    console.log('Nothing happens...');
}

// Retrieve width and height of the window

let height, width;

height = window.outerHeight;
width = window.outerWidth;

// without interface
height = window.innerHeight;
width = window.innerWidth;


console.log(height);
console.log(width);


// Location
let urlLocation = window.location;
console.log(urlLocation);
console.log(urlLocation.hostname);
console.log(urlLocation.port);

// append this in the url ?id=20&name=juan
console.log(ubicacion.search);

// redirect via JS
window.location.href = 'http://google.com';
