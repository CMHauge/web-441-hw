/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/

//Remove HTML elements, replace with blank space
let body=document.body;
body.innerText="";
//Body Styling
body.style.padding="0px";
body.style.margin="0px";
body.style.background="#b4b8ab";
//Header Element Creation
let el = document.createElement("div");
let elChild = document.createElement("h1");

//Header Element Text and Style
elChild.innerText = "Cat Profiles: Nebelung";
elChild.setAttribute("style","padding:1em; margin:8px; color:#ffffff; background-color:#93acb5; font-size: 36px; text-align:center; text-shadow: 2px 2px #000000; border: solid 6px #563e28");

//Paragraph 1 Creation
let elChild2 = document.createElement("p");
elChild2.innerText="Nebelungs are a strange and mystical breed of cat. Named for their misty-blue-grey fur, the name Nebelung is of german origin and means 'Creature of the Mist'. "
elChild2.setAttribute("style","padding:1em; margin:8px; margin-top:2em; color: #ffffff; background-color:#93acb5; font-size: 20px; text-align:center; font-weight: bold; text-shadow: 1px 1px #000000; border: solid 6px #563e28");

//Paragraph 2 Creation
let elChild3 = document.createElement("p");
elChild3.innerText="Nebelungs get rather large. Take, for example, my own Nebelung. He's around 14 pounds in the winter, 12-13 in the summer. Females are slightly smaller, and thus weigh less, but the males get rather large. Not only are they known for their beautiful silky blue-grey fur, but they're also recognizable by their gorgeous yellow-green eyes. Often their eyes start with a glowing green ring around their pupil, and fades to yellow the further away from the pupil you get. They are remarkable cats, incredibly smart, and wonderfully affectionate. They bond with only one or two of their humans, so smaller families or single individuals are great homes for Nebelungs. They're friendly, tend to be great with other animals, and will surprise you every day. As a Nebelung owner myself, I can say that there's never a dull moment. A bond with one of these beautiful creatures is a bond you'll never forget. My kitty is featured below:";
elChild3.setAttribute("style","padding:1em; margin:8px; margin-top:2em; color: #ffffff; background-color:#93acb5; font-size: 20px; text-align:center; font-weight: bold; text-shadow: 1px 1px #000000; border: solid 6px #563e28");

//Creating the first image
var johnnyA = new Image(265,301);
johnnyA.src="images/johnny1.jpg"
johnnyA.setAttribute("style","padding:0em; margin:10px; margin-left:auto; margin-right: auto; display:block");
johnnyA.setAttribute("alt","An close up of my cat's face.");
//Creating second image
var johnnyB = new Image(265,301);
johnnyB.src="images/johnny2.jpg"
johnnyB.setAttribute("style","padding:0em; margin:10px; margin-left: auto; margin-right: auto; display:block");
johnnyB.setAttribute("alt", "An image of my Nebelung Johnny.");

//Link Creation
let elChild4 = document.createElement("a");
elChild4.setAttribute("href","https://www.youtube.com/watch?v=OTcXt_bkB0I");
elChild4.innerText="For more, check out this feature about Nebelungs from Animal Planet's Cats 101 show.";
elChild4.setAttribute("style","display: inherit; padding:2em; margin:8px; margin-top:2em; color: #ffffff; background-color:#93acb5; font-size: 20px; font-weight: bold; text-shadow: 1px 1px #000000; border: solid 6px #563a28; text-align: center");

//Appending all children to document
el.appendChild(elChild);
el.appendChild(elChild2);
el.appendChild(elChild3);
el.appendChild(johnnyA);
el.appendChild(johnnyB);
el.appendChild(elChild4);
body.appendChild(el);
