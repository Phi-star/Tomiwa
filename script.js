document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    // Function to play music on user interaction
    function playMusic() {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    document.body.removeEventListener("click", playMusic);
                    document.body.removeEventListener("touchstart", playMusic);
                })
                .catch(error => console.error("Audio playback blocked:", error));
        }
    }

    // Add event listeners for user interaction (required for iOS & Chrome autoplay policies)
    document.body.addEventListener("click", playMusic);
    document.body.addEventListener("touchstart", playMusic);

    // Ensure smooth scrolling works correctly
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Fix for iOS: Prevent the music from stopping when the device sleeps
    document.addEventListener("visibilitychange", function () {
        if (!document.hidden && audio.paused) {
            audio.play();
        }
    });
});
