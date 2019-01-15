const product1 = 'Pizza';
const price1 = 30;
const product2 = 'Hamburger';
const price2 = 40;

// Old Method
let html;
html  = '<ul>'+
        '<li>Item: ' + product1 + '</li>' +
        '<li>Price: $ ' + price1 + '</li>' +
        '<li>Item: ' + product2 + '</li>' +
        '<li>Price: $ ' + price2 + '</li>' +
        '<li>Total: $' + (price1 + price2) + '</li>';
        '</ul>';

// Template Strings

html = `
    <ul>
        <li>Item: ${product1}</li>
        <li>Price: ${price1}</li>
        <li>Item: ${product2}</li>
        <li>Price: ${price2}  </li>
        <li>Total: ${total(price1, price2)}</li>
    </ul>
`;

function total(param1, param2) {
    return param1 + param2;
}

// HTML to inject the code

let app = document.querySelector('#app');
app.innerHTML = html ;