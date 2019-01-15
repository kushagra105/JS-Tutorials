
// Add to local Storage
localStorage.setItem('name', 'Juan');

// add to session storage
sessionStorage.setItem('name', 'Pablo');

// remove from local storage
localStorage.removeItem('name');

// read the value
const name = localStorage.getItem('name');

// Limpiar todo
localStorage.clear();


// If you add something else this will override the Local Storage
localStorage.setItem('name', 'Juan');

localStorage.setItem('name', 'Walter White');

// There're 2 ways of fixing this...
localStorage.setItem('name1', 'Juan');

localStorage.setItem('name2', 'Walter White');

// The second method is better, since LocalStorage
// only saves data as a string, we are going to save
// this is an array


const localStorageContent = localStorage.getItem('name');

console.log(localStorageContent);

let name;
if(localStorageContent == null) {
   name = [];
} else {
   name = JSON.parse( localStorageContent) ;
}

name.push('Walter ');

localStorage.setItem('name', JSON.stringify( name ) );
