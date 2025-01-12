// ! Event Listener



// function changeText (Event) {
//   console.log(Event);
//   let fpara = document.getElementById('fpara');

//   fpara.textContent = "Hello Love";
// }


// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);

// fpara.removeEventListener('click', changeText);



// let fanchor = document.getElementById('fanchor');

// fanchor.addEventListener('click', function(Event) {
  
//   Event.preventDefault();
//   fanchor.textContent = "Hi i am here";

// });


// let paras = document.querySelectorAll('p');

function alertPara (event) {
  if (event.target.nodeName === 'SPAN') {
    alert("You have clicked on para : " +  event.target.textContent );
  }
} 

// for (let i = 0; i<paras.length; i++) {
//   let para = paras[i];
//   console.log("Eventlistener added")
//   para.addEventListener('click', alertPara);
// }



let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertPara);

