// see https://imagekit.io/blog/lazy-loading-images-complete-guide/
// see https://codepen.io/imagekit_io/pen/MBNwKB


document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll("img.lazy");

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListenter('orientationChange', lazyload);

    let lazyloadThrottleTimeout = false;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            const scrollTop = window.pageYOffset;
            for (let img of images) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.alt = img.dataset.alt;

                    img.classList.remove('lazy');
                }
            }
           /*if (images.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener('resize', lazyload);
                window.removeEventListener('orientationChange', lazyload);
            }
*/
        }, 20);
    }

});