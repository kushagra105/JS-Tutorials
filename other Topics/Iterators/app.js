
// Iterators
function createIterator(cart) {
    let i = 0;

    return {
        nextProduct: function() {
            let end = (i >= cart.length);
            let value = !end ? cart[i++] : undefined;

            return {
                end: end,
                value: value
            };
        }
    };
}
const cart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

const shoppingCart = createIterator(cart);

console.log(shoppingCart.nextProduct() );
console.log(shoppingCart.nextProduct() );
console.log(shoppingCart.nextProduct() );
console.log(shoppingCart.nextProduct() );
console.log(shoppingCart.nextProduct() );