// Function Declaration
function helloVisitor() {
    console.log('Hello & Welcome ');
}
// A function must be called
helloVisitor();

// Passing Arguments to functions will make them more smart
function helloVisitor(firstName, lastName) {
    return `Hello ${firstName}  ${lastName} `;
}
console.log( helloVisitor('Pablo', 'De la torre') );

// Try without second argument
console.log( helloVisitor('Pablo') );

// Default parameters older way
function helloVisitor(firstName, lastName) {
    if(typeof firstName === 'undefined') {firstName = ''}
    if(typeof lastName === 'undefined') {lastName = ''}
    return `hello ${firstName}  ${lastName} `;
}
console.log( helloVisitor('Pablo', 'De la torre') );
console.log( helloVisitor('Pablo', ) );
console.log( helloVisitor() );


// Default Values new way
function helloVisitor(firstName = 'Juan' , lastName = 'de la torre') {
    return `Hello ${firstName}  ${lastName} `;
}
console.log( helloVisitor('Pablo', 'De la torre') );

// Function expressions
const sum = function(a = 5, b = 2) {
    return a + b;
};

console.log(sum(4, 8));
console.log(sum(14, 18));
console.log(sum(24, 28));
console.log(sum());


//  FUnctions that are invoked inmediately (IIFEs)
// immediately-invoked function expression

(function() {
    console.log('IIFES!!');
})();

// Passing arguments to functions

(function(technology) {
    console.log('Learning ' + technology);
})('JavaScript');

// Property Methods (a function inside an object is a method)

const musicPlayer = {
    play: function(id) {
        console.log(`Playing song with the ID: ${id}`);
    },
    pause: function() {
        console.log('paused....');
    }
}
musicPlayer.play(30);
musicPlayer.pause();


// Methods can be outside (but variable name should match)
musicPlayer.remove = function(id) {
    console.log(`Remove from my playlist: ${id}`)
}
musica.remove(20);


// Basically you can create your own functions, but remember
// JavaScript has  set of functions also.

console.log();
alert();
prompt();
confirm();