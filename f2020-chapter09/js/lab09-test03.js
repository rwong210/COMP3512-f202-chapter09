/* add code after this comment */

document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll(".panel");
    for (let p of panels) {
        p.addEventListener('click', function () {
            p.classList.toggle("open");
        })
    }
});