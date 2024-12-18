import axios from 'axios';

let menuIcon = document.querySelector(".menu_icon");
let sidebar = document.querySelector(".sidebar");
let logo = document.querySelector(".logo");
let content = document.querySelector(".content");
let youtubeSearchForm = document.querySelector('.youtube-search');
let search_box = document.getElementById('search');
let videoSection = document.querySelector('.video-section');

// Sidebar toggle 
menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    content.classList.toggle("large-content");
};

// Redirect to homepage 
logo.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5173/youtube/Youtube.html";
});

const apiKey = "AIzaSyD9NZ1estPeq_RfjEPiyMwqykH2ioZcB2k";

// fetch trending/random videos
async function fetchRandomVideos() {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: apiKey,
                part: 'snippet',
                q: '', 
                type: 'video',
                maxResults: 20,
                order: 'date',
                publishedAfter: getRandomPublishedDate(),
            }
        });

        // Display fetched videos
        displayThumbnails(response.data.items);

    } catch (error) {
        console.error("Error fetching videos:", error);
        videoSection.innerHTML = "<p>Error fetching videos. Please try again later.</p>";
    }
}

function getRandomPublishedDate() {
    const now = new Date();
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear() - 1);

    const randomDate = new Date(oneYearAgo.getTime() + Math.random() * (now.getTime() - oneYearAgo.getTime()));
    return randomDate.toISOString();
}

fetchRandomVideos();

// Search to fetch and display videos based on user input
youtubeSearchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let searchValue = search_box.value.trim();

    if (!searchValue) {
        alert("Please enter a search term.");
        return;
    }

    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: apiKey,
                part: 'snippet',
                q: searchValue,
                type: 'video',
                maxResults: 20
            }
        });

        // Display the fetched videos
        displayThumbnails(response.data.items);

    } catch (error) {
        console.error("Error fetching search results:", error);
        videoSection.innerHTML = "<p>Error fetching videos. Please try again later.</p>";
    }
});

// display fetched video thumbnails
function displayThumbnails(arr) {
    videoSection.innerHTML = ''; 

    arr.forEach(video => {
        let card = document.createElement('div');
        card.className = 'youtube-card';

        let imgTag = document.createElement('img');
        imgTag.src = video.snippet.thumbnails.medium.url;
        imgTag.alt = video.snippet.title;

        let para = document.createElement('p');
        para.innerText = video.snippet.title;

        card.append(imgTag, para);

        // Event listener to open video page in a new tab
        card.addEventListener("click", () => {
            const videoId = video.id.videoId || video.id; 
            if (videoId) {
                window.location.href = `video.html?videoId=${videoId}`;
            }
        });

        videoSection.append(card);
    });
}
