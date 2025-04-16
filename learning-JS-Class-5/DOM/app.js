// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   // btn.onclick = sayHello;

//   // btn.onmouseenter = function() {
//   //   console.log("button was entered");
//   // }
//   // console.dir(btn);

//   //! Event Listener
//   // btn.addEventListener("click", sayHello);
//   // btn.addEventListener("click", sayName);
//   // btn.addEventListener("dblclick", function() {
//   //   console.log("You Double Clicked Me!");
//   // });
// }

// btn.onclick = function () {
//   console.log("button was clicked");
// }

// function sayHello() {
//   alert("Hello");
// }

// function sayName() {
//   alert("tonmoy");
// }


// let para = document.querySelector("p");

// para.addEventListener("click", function() {
//   console.log("Para was clicked");
// })

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", function() {
//   console.log("Mouse inside box");
// })


// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let para = document.querySelector("p");

// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "red";
// }

// btn.addEventListener("click", function(Event) {
//   console.log(Event);
//   console.log("button clicked");
// });
// btn.addEventListener("dblclick", function(Event) {
//   console.log(Event);
//   console.log("button clicked");
// });
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// para.addEventListener("click", changeColor);


// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
  // console.log("key = ", Event.key);
//   console.log("code = ", event.code); // ArrowUp(U),ArrowDown(D),ArrowLeft(L),ArrowRight(R);
//   if(event.code == "KeyU") {
//     console.log("character moves UP");
//   } else if (event.code == "KeyD") {
//     console.log("character moves Down");
//   } else if (event.code == "KeyL") {
//     console.log("character moves left");
//   } else if (event.code == "KeyR") {
//     console.log("character moves right");
//   }
  // console.log("Keyboard pressed");
// })
// inp.addEventListener("keyup", function() {
//   console.log("Key was release");
// });



let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("black");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currMode);
});