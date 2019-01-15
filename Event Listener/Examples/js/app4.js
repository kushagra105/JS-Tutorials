
// Create the variables
const searchForm = document.getElementById('search');
const searchInput = document.getElementById('search-course');

// esperar a submit
searchForm.addEventListener('submit', printEvent);

// Input Events
searchInput.addEventListener('keydown', printEvent);
searchInput.addEventListener('keyup', printEvent);
searchInput.addEventListener('keypress', printEvent);
searchInput.addEventListener('focus', printEvent);
searchInput.addEventListener('blur', printEvent);
searchInput.addEventListener('cut', printEvent);
searchInput.addEventListener('copy', printEvent);
searchInput.addEventListener('paste', printEvent);
searchInput.addEventListener('input', printEvent);


// Form
function printEvent(e) {
    // read the values in the Input
    console.log(searchInput.value);

    console.log(`Type: ${e.type}`);

    // searchForm.reset();
    e.preventDefault();
}
   