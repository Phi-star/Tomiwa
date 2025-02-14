document.addEventListener("DOMContentLoaded", function () {
    const videos = [
        "https://files.catbox.moe/t9le3z.mp4",
    let currentVideo = 0;
    const videoElement = document.getElementById("background-video");
    const audio = document.getElementById("background-music");

    // Function to change the video
    function changeVideo() {
        currentVideo = (currentVideo + 1) % videos.length;
        videoElement.src = videos[currentVideo];
        videoElement.load();
        videoElement.play();
    }

    // Change video when the current one ends
    videoElement.addEventListener("ended", changeVideo);

    // Start with the first video
    videoElement.src = videos[currentVideo];
    videoElement.play();

    // Play background music when user interacts (fixes autoplay issues)
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });

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
