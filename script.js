const videoList = [
    "video1.mp4",  
    "https://files.catbox.moe/3un2c9.mp4",  
    "https://files.catbox.moe/qlhj9s.mp4"   
];

let currentVideo = 0;
const videoElement = document.getElementById("background-video");
videoElement.src = videoList[currentVideo];

videoElement.addEventListener("ended", () => {
    currentVideo = (currentVideo + 1) % videoList.length;
    videoElement.src = videoList[currentVideo];
    videoElement.play();
});

// Ensure music plays automatically
const music = document.getElementById("background-music");
document.body.addEventListener("click", () => music.play(), { once: true });
