//selection of more than one element
// document.getElementsByClassName

const links = document.getElementsByClassName('link');
// console.log(links);
links[0].style.color = 'red';
links[2].textContent = 'New Text';
console.log(links[0]);


// You can also use queryselector and getElementsByClassName
const links = document.querySelector('nav').getElementsByClassName('link');
console.log(links);


// document.getElementsByTagName
let images = document.getElementsByTagName('img');
console.log(images[0]);

// Convert HTMLCollection to array
images = Array.from(images);
console.log(images);

// Loop through SRC of images.
images.forEach(function(image) {
    console.log(image.src);
});

// document.querySelectorAll
// returns a node list


const cards = document.querySelectorAll('.card');
console.log(cards);

const courses = document.querySelectorAll('.card h4')

courses.forEach(function(course) {
    console.log(course.textContent);
});


// odd links
const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');
console.log(oddLinks);

oddLinks.forEach(function(odd) {
    odd.style.backgroundColor = 'red';
    odd.style.color  = 'white';
});

// Even Links
const evenLinks = document.querySelectorAll('#primary a:nth-child(even)');
console.log(evenLinks);

evenLinks.forEach(function(even) {
    even.style.backgroundColor = 'blue';
    even.style.color  = 'white';
});

// Change all add-to-cart texts.
const addCartBtns = document.querySelectorAll('.add-to-cart');
addCartBtns.forEach(function(button) {
    button.textContent = 'New Text';
});
