// Get video ID from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('videoId');

// video player iframe
const videoPlayer = document.getElementById('videoPlayer');

// check if videoId exists
if (videoId) {
    // Embed video iframe
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
} else {
    // If videoId is missing, set the iframe src to an empty string or a default message
    videoPlayer.src = '';
    console.error("Video ID is missing from the URL.");
}

