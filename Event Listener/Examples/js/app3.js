// Create the variables
const heading = document.querySelector('#heading');
const links = document.querySelector('nav');
const clearCartBtn = document.querySelector('#clear-cart');

// click
clearCartBtn.addEventListener('click', printEvent);

// Doble CLick
clearCartBtn.addEventListener('dblclick', printEvent);

// Mouse Enter
clearCartBtn.addEventListener('mouseenter', printEvent);

// mouse Leave
clearCartBtn.addEventListener('mouseleave', printEvent);

// Mouse over
clearCartBtn.addEventListener('mouseover', printEvent);

// mouse Out
clearCartBtn.addEventListener('mouseout', printEvent);

// MouseDown (click and hold)
clearCartBtn.addEventListener('mousedown', printEvent);

// Mouse Up (mouse click and on release)
clearCartBtn.addEventListener('mouseup', printEvent);

// MouseMove
links.addEventListener('mousemove', printEvent);

function printEvent(e) {
    console.log(`The Event is: ${e.type}` );
}
   