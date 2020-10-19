/* code goes here */

window.addEventListener("load", function () {
    document.addEventListener('keypress', playSound);
    const keys = document.querySelectorAll(".key");
    for (let key of keys) {
        key.addEventListener('transitionend', removeTransition)
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    function playSound(e) {
        const keyPressed = e.key;
        const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
        audio.currentTime = 0;
        if (!audio) return;
        const div = document.querySelector(`div.key[data-key="${keyPressed}"]`);
        div.classList.add('playing');
        audio.play();
    }
    window.addEventListener('load', function () {
        document.addEventListener('keypress', playSound);

    })
});