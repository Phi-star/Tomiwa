document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-music");

    // Play music on user interaction (to bypass autoplay restrictions)
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });

    // Smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
