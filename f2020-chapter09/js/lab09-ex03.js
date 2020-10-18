/* add code after this comment */

//select the <ul>
const list = document.querySelector("#thumb-list");

//create list item <li>
const item = document.createElement("img");

//create <img> elementand set its src attribute
const img = document.createElement("img");
img.setAttribute("src", "images/8710320515.jpg");

item.appendChild(img);
list.appendChild(item);

