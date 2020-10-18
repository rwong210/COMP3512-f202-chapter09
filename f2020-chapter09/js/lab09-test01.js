/* add code after this comment */

document.getElementById("thumb-list").style.border = "5px solid black";

document.querySelector("textarea").value = document.querySelector("p").textContent;

const images = document.querySelectorAll("ul img");

for (let i of images){
i.style.boxShadow = "5px 5px rgba(0,0,0,0.5)";
}

