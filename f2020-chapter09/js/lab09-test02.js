
const photos = JSON.parse(content);

/* put your code after this */

const sect = document.querySelector("#parent > section");

for (let p of photos) {
 const fig = document.createElement("figure");
 const img = document.createElement("img");

 img.setAttribute("src", `images/${p.filename}`);
 img.setAttribute("alt", `${p.title}`);

}
