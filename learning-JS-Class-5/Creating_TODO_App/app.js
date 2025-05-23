// TODO APP with console

// let todo = [];

// let req = prompt("please enter your request");

// while(true) {
//   if(req == "quit") {
//     console.log("quitting app");
//     break;
//   }

//   if (req == "list") {
//     console.log("-------------");
//     for (i = 0; i<todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("-------------");
//   } else if (req == "add") {
//     let task = prompt("please enter the task you want to add");
//     todo.push(task);
//     console.log("task added");
//   } else if (req == "delete") {
//     let idx = prompt("please enter the task index you want to delete");
//     todo.splice(idx, 1);
//     console.log("task deleted");
//   } else {
//     console.log("Wrong Request");
//   }
//   req = prompt("please enter your request");
// }



// TODO App with DOM

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function() {
//   let item = document.createElement("li");
//   item.innerText = inp.value;

//   let delBtn = document.createElement("button");
//   delBtn.innerText = "Delete";
//   delBtn.classList.add("delete");
//   item.appendChild(delBtn);

//   ul.appendChild(item);
//   inp.value = "";
// });


// ul.addEventListener("click", function(event) {
//   if (event.target.nodeName == "BUTTON") {
//     let listItem = event.target.parentElement;
//     listItem.remove();
//     console.log("deleted");
//   }
// });


//TODO with dom

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);

  ul.appendChild(item);
  inp.value = "";
});


ul.addEventListener("click", function(event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});