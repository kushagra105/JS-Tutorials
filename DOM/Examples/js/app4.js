// traversing is how you move in your html code based on how
// this elements are related to the other
// In traversing you define the element to select
// and then you move until you reach the desired element

// Traversing
let element;

const navigation = document.querySelector('nav');
const links = document.querySelector('.link');

// Get ChildNodes // Nodelist de todo
element = navigation.childNodes;

// get Children // elements (doesn't add the text)
element = navigation.children;
// element = navigation.children[0].nodeName;
//  element = navigation.children[0].nodeType;
// 1 = Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - document
// 10 doctype

navigation.children[2].textContent = 'Hello!!';

// Children of the children
element = navigation.children[3].children[0].textContent;

// Last Child
element = navigation.lastChild;
element = navigation.lastElementChild;

// First Child
element = navigation.firstChild;
element = navigation.firstElementChild;

// Count the elements
element = navigation.childElementCount;

console.log( element ) ;

// Parent
let element;
let cartBtn = document.querySelector('.add-to-cart');

// Parent Node
element = cartBtn.parentNode;
element = cartBtn.parentElement;
element = cartBtn.parentElement.parentElement;

// sibling (next)
element = cartBtn.nextSibling;
element = cartBtn.nextElementSibling;
element = cartBtn.nextElementSibling.nextElementSibling;

// Siblings (previous)
element = cartBtn.previousSibling;
element = cartBtn.previousElementSibling;
element = cartBtn.previousElementSibling.previousElementSibling;

console.log(element);
