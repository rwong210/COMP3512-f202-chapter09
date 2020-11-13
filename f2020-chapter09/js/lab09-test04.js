/* add code after this comment */

document.addEventListener("DOMContentLoaded", function () {

    const thumbNails = document.querySelectorAll("#thumbBox img");
    const image = document.querySelector("#imgManipulated > img");

    //click handler for thumbnail image
    for (let thumbNail of thumbNails) {
        thumbNail.addEventListener('click', function () {
            let focused = document.querySelector("figure img");
            let newSrc = thumbNail.src;
            newSrc = newSrc.replace("small", "medium");
            focused.src = newSrc;

            // change the figcaption info to match focused image
            const label = document.querySelector("figcaption");
            label.innerHTML = `<em>${thumbNail.alt}</em><br><span>${thumbNail.title}</span>`;
        })
    }

    // event delegation with check for input
    document.querySelector("#sliderBox").addEventListener('input', function (e) {
        if (e.target && e.target.nodeName === "INPUT") {
            changeSlider(e);
        }
    });

    // event listener for reset button
    document.querySelector("#resetFilters").addEventListener('click', function (e) {
        reset(e);
        e.stopPropagation();
    })
    // function to change slider values
    function changeSlider(e) {
        // set image filters value based on associated slider value
        image.style.filter = (`opacity(${sliderOpacity.value}%) saturate(${sliderSaturation.value / 100}) brightness(${sliderBrightness.value}%) hue-rotate(${sliderHue.value}deg) grayscale(${sliderGray.value}%) blur(${sliderBlur.value}px)`);
        document.querySelector("#numSaturation").innerText = sliderSaturation.value;
        document.querySelector("#numBrightness").innerText = sliderBrightness.value;
        document.querySelector("#numHue").innerText = sliderHue.value;
        document.querySelector("#numGray").innerText = sliderGray.value;
        document.querySelector("#numBlur").innerText = sliderBlur.value;
    }

    // function to reset image filter
    function reset(e) {
        image.style.filter = ("none");
        e.stopPropagation();
    }
});