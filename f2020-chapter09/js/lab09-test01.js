/* add code after this comment */

document.getElementById("thumb-list").style.border = "2px solid lightgrey";

document.querySelector("textarea").value = document.querySelector("p").textContent;

const images = document.querySelectorAll("ul img");

for (let i of images){
i.style.boxShadow = "3px 3px 2.5px rgba(0,0,0,0.5)";
}

document.querySelector("ul").style.padding = "5px";
