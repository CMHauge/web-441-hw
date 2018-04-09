/* Defining different variables */
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

/* Defining the Non-Pineapple options containers as variables */
let npCont1 = document.querySelector(".noPineappleContainer1");

/* Defining the first set of button variables on main page */
let bt1 = document.querySelector("#PA1");
let bt2 = document.querySelector("#noPA1");

/* Defining the form and storage elements */
let formEl = document.querySelector(".form1");
let storEl = document.querySelector(".storageDiv");

/* Adding event listeners to buttons to unhide text after option selection */
bt1.addEventListener("click", showHideTextPA);
bt2.addEventListener("click", showHideTextNoPA);

/* Create a function that allows text input into a form */
function grabText() {
  let textIn;
  textIn = document.querySelector("#textIn1").value;
  if( textIn.length < 1){ alert("Write your name!"); return }

/* Add text when user inputs their name, welcoming them to the story */
  let textToAdd = document.createTextNode("Hello "+textIn+"!");
  let newP = document.createElement("P");
  newP.appendChild(textToAdd);

/* Telling the script where to store this new information */
  let storage = document.querySelector("#storageDiv");
  storage.appendChild(newP);
}
/* Prevent the browser from performing the default function upon pressing a key, and possibly refreshing the page, rather than submitting their name */
document.querySelector(".form1").addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    grabText();
  }
});
/* Grab the text when a user inputs it */
document.querySelector("#runButton").addEventListener('click', grabText);

/* Adding button functionality to hide and unhide text once a decision is made by user */
/* This allows us to hide everything initially until our buttons are pressed, and then switch over to the proper cooresponding story section */
/*Pineapple Pizza Option */
function showHideTextPA(){
  if (paCont1.hidden) {
    paCont1.hidden=false;
    formEl.hidden=true;
    storEl.hidden=true;
    cont1.hidden=true;
    npCont1.hidden=true;
    bt2.hidden=true;
    bt1.hidden=true;
    el.hidden=true;
  } else {
    paCont1.hidden=true;
    formEl.hidden=false;
    storEl.hidden=false;
    cont1.hidden=false;
    npCont.hidden=false;
    bt2.hidden=false;
    bt1.hidden=false;
    el.hidden=false;
  }
}

/* Same thing as before, but this time for the second option/non-pineapple option */
function showHideTextNoPA() {
  if (npCont1.hidden) {
  npCont1.hidden=false;
  formEl.hidden=true;
  storEl.hidden=true;
  cont1.hidden=true;
  paCont1.hidden=true;
  bt1.hidden=true;
  bt2.hidden=true;
  el.hidden=true;

} else {
  npCont1.hidden=true;
  formEl.hidden=false;
  storEl.hidden=false;
  cont1.hidden=false;
  paCont1.hidden=false;
  bt1.hidden=false;
  bt2.hidden=false;
  el.hidden=false;
}
}
el.appendChild(elChild);
el.appendChild(elChild2);
el.appendChild(elChild3);
body.appendChild(el);
