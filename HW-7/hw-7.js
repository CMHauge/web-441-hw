/* Defining different variables, I may have gone overboard but everything is there I think. */
let body = document.body;

/* Defining usual div, header and paragraph variables */
let el = document.createElement("div");
let elChild = document.createElement("h1");
let elChild2 = document.createElement("h3");
let elChild3 = document.createElement("p");

/* Defining main container variable, beginning of story */
let cont1 = document.querySelector(".firstContainer");

/* Defining the Pineapple options containers as variables */
let paCont1 = document.querySelector(".pineappleContainer1");
let paCont2 = document.querySelector(".pineappleContainer2");
let paCont3 = document.querySelector(".pineappleContainer3");

/* Defining the Non-Pineapple options containers as variables */
let npCont1 = document.querySelector(".noPineappleContainer1");
let npCont2 = document.querySelector(".noPineappleContainer2");
let npCont3 = document.querySelector(".noPineappleContainer3");

/* Defining the first set of button variables on main page */
let bt1 = document.querySelector("#PA1");
let bt2 = document.querySelector("#noPA1");

/* Defining the Pineapple button variables */
let btPA2 = document.querySelector("#PA2");
let btPA3 = document.querySelector("#PA3");

/* Defining the Non-Pineapple button variables */
let btNP2 = document.querySelector("#noPA2");
let btNP3 = document.querySelector("#noPA3");

/* Adding event listeners to buttons to unhide text after option selection */
bt1.addEventListener("click", showHideTextPA);
bt2.addEventListener("click", showHideTextNoPA);
btPA2.addEventListener("click", showHideTextPA2);
btPA3.addEventListener("click", showHideTextPA3);
btNP2.addEventListener("click", showHideTextNoPA2);
btNP3.addEventListener("click", showHideTextNoPA3);

/*I don't know why this isn't working...*/
function grabText() {
  let textIn;
  textIn = document.querySelector("#textIn1").value;
  if( textIn.length < 1){ alert("Write your name!"); return }

  let textToAdd = document.createTextNode(textIn);
  let newP = document.createElement("P");
  newP.appendChild(textToAdd);

  let storage = document.querySelector("#storageDiv");
  storage.appendChild(newP);
}

document.querySelector(".form1").addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    grabText();
  }
});

document.querySelector("#runButton").addEventListener('click', grabText);
