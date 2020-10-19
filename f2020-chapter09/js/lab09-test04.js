/* add code after this comment */

document.addEventListener("DOMContentLoaded", function () {

    const thumbNails = document.querySelectorAll("#thumbBox img");
    //click handler
    for (let thumbNail of thumbNails) {
        thumbNail.addEventListener('click', function () {
            let oldMedium = document.querySelector("figure img");
            let newMedium = thumbNail.src;
            newMedium = newMedium.replace("small", "medium");
            oldMedium.src = newMedium;

            const label = document.querySelector("figcaption");
            label.innerHTML = `<em>${thumbNail.alt}</em><br><span>${thumbNail.title}</span>`;
        })
    }

    const sliders = document.querySelectorAll("input[type=range]");
        for (let slider of sliders){
            slider.addEventListener('input', changeSlider);
            let image = document.querySelector("imgManipulated img");
            function changeSlider() {
                image.

            }

        }
})