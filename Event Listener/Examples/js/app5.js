// Event Bubling
const cards =  document.querySelector('.card');
const infoCards = document.querySelector('.info-card');
const addCartbTN = document.querySelector('.add-to-cart');

cards.addEventListener('click', function (){
  console.log('You Clicked on the Card!');
});

infoCards.addEventListener('click', function (){
  console.log('You Clicked on the Info!');
});

addCartbTN.addEventListener('click', function (){
    console.log('You Clicked on the Add To Cart btn');
});

// You prevent this with stopPropagation()
e.stopPropagation();
   