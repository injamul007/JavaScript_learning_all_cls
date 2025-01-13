//! JS-DOM Manipulation

let mydiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');

// newElement.textContent = "this is me only love";

// mydiv.insertAdjacentElement('beforebegin', newElement);



let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);