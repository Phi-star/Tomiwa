document.addEventListener("DOMContentLoaded", function () {
    const videoElement = document.getElementById("background-video");
    const audio = document.getElementById("background-music");

    // Set the single video source
    videoElement.src = "https://files.catbox.moe/r7gqhe.mp4";
    videoElement.play();

    // Ensure music plays when user interacts (fix autoplay issue)
    function playAudio() {
        if (audio.paused) {
            audio.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }

    // Play music when the user clicks anywhere on the page
    document.body.addEventListener("click", playAudio);
    
    // Also try to play music when the video starts
    videoElement.addEventListener("play", playAudio);

    // Smooth scrolling effect for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
