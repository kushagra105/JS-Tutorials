let element;

element = document;
element = document.all;
element = document.all[0];
element = document.head;
element = document.body;
element = document.domain;
element = document.URL;
element = document.characterSet;
element = document.contentType;

element = document.links;
element = document.links[0].id;
element = document.links[0].className;

element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].action;
element = document.forms[0].classList;
element = document.forms[0].classList[0];

element = document.images;

element = document.scripts;
element = document.scripts[2].getAttribute('src');

// looping all images
let images = document.images;
let imagesArray = Array.from(images);

imagesArray.forEach(function(image) {
    console.log(image);
});

console.log(element);