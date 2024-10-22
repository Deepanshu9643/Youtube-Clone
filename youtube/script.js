let menuIcon = document.querySelector(".menu_icon");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let searchInput = document.getElementById("search_input");

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    content.classList.toggle("large-content");
}

document.querySelector(".logo").addEventListener("click", () => {
    window.location.href = "index.html";
});

// Function to search YouTube videos
async function searchVideos(query) {
    const API_KEY = 'AIzaSyDTiTDLuAQ0UB3uQp-hXQNqeF-dtz0pKQA';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=${API_KEY}`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        displayResults(data.items);
    } catch (error) {
        console.error("Error fetching the YouTube API:", error);
    }
}

// Function to display search results
function displayResults(videos) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';  // Clear previous results

    videos.forEach(video => {
        let videoTitle = video.snippet.title;
        let videoId = video.id.videoId;
        let videoThumbnail = video.snippet.thumbnails.medium.url;

        // Create elements to display the video
        let videoElement = document.createElement('div');
        videoElement.classList.add('video');

        videoElement.innerHTML = `
            <img src="${videoThumbnail}" alt="${videoTitle}">
            <p>${videoTitle}</p>
        `;

        // Add event to open video on click
        videoElement.onclick = () => {
            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        };

        resultDiv.appendChild(videoElement);
    });
}

// Trigger search on Enter key or button click
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let query = searchInput.value;
        if (query) {
            searchVideos(query);
        }
    }
});





















// let menuIcon = document.querySelector(".menu_icon")
// let sidebar = document.querySelector(".sidebar")
// let content = document.querySelector(".content")

// menuIcon.onclick =function(){
//     sidebar.classList.toggle("small-sidebar")
//     content.classList.toggle("large-content")
// }


// document.querySelector(".logo").addEventListener("click", () => {
//     window.location.href = "index.html";
// });

