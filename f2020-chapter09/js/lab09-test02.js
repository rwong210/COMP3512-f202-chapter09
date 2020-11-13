const photos = JSON.parse(content);

/* put your code after this */

let section = document.querySelector("section#parent");

for (let p of photos) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");

    img.setAttribute("src", `images/${p.filename}`);
    img.setAttribute("alt", `${p.title}`);

    figure.appendChild(img);

    // variable to be appended to figure
    let append = createFigCap(p);
    
    figure.appendChild(append);
    section.appendChild(figure);

    // returns the html markup for each figure element
    function createFigCap(photo) {
        // create figcaption element
        const figCaption = document.createElement("figcaption");

        // create h2 element
        const h2 = document.createElement("h2");
        h2.innerText = `${photo.title}`;
        figCaption.appendChild(h2);

        // create paragraph element
        const p = document.createElement("p");
        p.innerText = `${photo.description}`;
        figCaption.appendChild(p);

        // create colors array
        const colors = photo.colors;

        // create color spans
        for (let c of colors) {
            const span = document.createElement("span");
            span.style.display = "inline-block";
            span.innerText = "  ";
            span.style.backgroundColor = `${c.hex}`;
            figCaption.appendChild(span);
        }

        return figCaption;
    }
}