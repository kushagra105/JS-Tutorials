// Delegation
document.body.addEventListener('click', removeProductFromCart);

function removeProductFromCart(e) {
    e.preventDefault();

    console.log(e.target.classList);
    //console.log(e.target.classList.contains( '.remove') );

    if(e.target.classList.contains(  '.remove') ){
        e.target.parentElement.parentElement.remove();
    }
}
   