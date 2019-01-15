
// Event listeners will wait for any a specific interaction
// then they will execute the code
// example: when a user clicks on a button
// or when someone submits a form

document.querySelector('#clear-cart').addEventListener('click', function(e) {
    e.preventDefault();
    console.log("it works");
});

// Another Method
const clearCartBtn = document.querySelector('#clear-cart');

clearCartBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("it works");
});


document.querySelector('#clear-cart').addEventListener('click', executeFunction );

function executeFunction(e) {
    e.preventDefault();

    console.log("It's working");

    // target
    let element;
    element = e;

    //  read the values.
    element = e.target;
    element = e.target.id;
    element = e.target.className;
    element = e.target.innerText;

    element = e.target.innerText = 2 + 2;

    console.log(element);
}