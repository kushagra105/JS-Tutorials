
// Remove any element
// Remove by it's own
const links = document.querySelectorAll('a');

links[0].remove();

// Remove by the children
const navigation = document.querySelector('#primary');

navigation.removeChild(links[2]);
