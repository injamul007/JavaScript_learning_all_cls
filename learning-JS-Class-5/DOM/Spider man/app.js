// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i<smallImages.length; i++) {
  // smallImages[i].src = "img file/spider man piccc.jpg";
//   console.log(`value of image no. ${i} is changed`);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));

//! making (a tag) color change using for loops and for of loops

// let links = document.querySelectorAll(".box a");

// for (let i = 0; i<links.length; i++) {
//   links[i].style.color = "green";
// }

// for(link of links) {
//   link.style.color = "red";  //inline style setting
// }


let para1 = document.createElement('p');
para1.innerText = "hey im red!";
document.querySelector("body").append(para1);
para1.classList.add('red');

let h3 = document.createElement('h3');
h3.innerText = "hey im blue";
document.querySelector('body').append(h3);
h3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "im in a div";
para2.innerText = "mee too!";

div.append(h1);
div.append(para2);

div.classList.add("box");

document.querySelector("body").append(div);

