let menuIcon = document.querySelector(".menu_icon");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let youtubeSearchForm = document.querySelector('.youtube-search');
let search_box = document.getElementById('search');
let search_button = document.getElementById('submit');
let videoSection = document.querySelector('.video-section');

// Sidebar toggle functionality
menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    content.classList.toggle("large-content");
};

// Redirect to homepage when logo clicked
document.querySelector(".logo").addEventListener("click", () => {
    window.location.href = "index.html";
});

// Sample data to display on initial load
let sampleData = {
        "kind": "youtube#searchListResponse",
        "etag": "OFkM5eu-jD1Hhq0aQP8lu7lLQn4",
        "nextPageToken": "CDIQAA",
        "regionCode": "IN",
        "pageInfo": {
            "totalResults": 1000000,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "VLsprN-3pP3-OlMU-deR57iAiS4",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "EgDmCbhmstU"
                },
                "snippet": {
                    "publishedAt": "2023-06-25T17:30:02Z",
                    "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
                    "title": "JavaScript Advance Crash Course: Level Up Your Coding Skills! Accelerate Your Front-End Mastery!",
                    "description": "Are you ready to take your JavaScript skills to the next level? Look no further! Join our JavaScript Advance Crash Course and ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/EgDmCbhmstU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/EgDmCbhmstU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/EgDmCbhmstU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Sheryians Coding School",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-06-25T17:30:02Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "jm91JpUXdnR3JCmgsrJnvH7SVm4",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "R9I85RhI7Cg"
                },
                "snippet": {
                    "publishedAt": "2022-02-13T06:00:10Z",
                    "channelId": "UC80PWRj_ZU8Zu0HSMNVwKWw",
                    "title": "Advanced JavaScript Crash Course",
                    "description": "Courses - https://learn.codevolution.dev/ Support UPI - https://support.codevolution.dev/ Support PayPal ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/R9I85RhI7Cg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/R9I85RhI7Cg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/R9I85RhI7Cg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Codevolution",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-02-13T06:00:10Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "mrFr9NhjbRE7vYx_hxM6l0x6Xq8",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "ks4MFTHLfyg"
                },
                "snippet": {
                    "publishedAt": "2023-07-12T16:00:38Z",
                    "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
                    "title": "Master Advanced JavaScript Concepts and Become a JavaScript Ninja",
                    "description": "Do you want to take your JavaScript skills to the next level? Do you want to learn how to use advanced JavaScript concepts to ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ks4MFTHLfyg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ks4MFTHLfyg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ks4MFTHLfyg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Sheryians Coding School",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-07-12T16:00:38Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "CJ9z-Z0iDv6cdLDjtcAbjYdMgG0",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "YwsOCN8woA8"
                },
                "snippet": {
                    "publishedAt": "2024-02-29T13:30:14Z",
                    "channelId": "UCwfaAHy4zQUb2APNOGXUCCA",
                    "title": "JavaScript Advanced full Course Tutorial🔥15+ Projects + Free Notes",
                    "description": "Complete Advanced JavaScript Tutorial in One Video in Hindi Watch JavaScript Full Course Part 1: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YwsOCN8woA8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YwsOCN8woA8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YwsOCN8woA8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Thapa Technical",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-02-29T13:30:14Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "XIgqzCfLuKcB-Cy9Bg1dbJLYgjc",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "tcQDnqRakxk"
                },
                "snippet": {
                    "publishedAt": "2023-12-22T16:32:12Z",
                    "channelId": "UCeVMnSShP_Iviwkknt83cww",
                    "title": "Advanced JavaScript | Sigma Web Development Course - Tutorial #82",
                    "description": "Access the Sigma web development course playlist: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/tcQDnqRakxk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/tcQDnqRakxk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/tcQDnqRakxk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CodeWithHarry",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-12-22T16:32:12Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "KZ6eREQ0TaSsUkYsF29jtjRrpK8",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "gUUCmRJjVvo"
                },
                "snippet": {
                    "publishedAt": "2023-04-23T11:17:39Z",
                    "channelId": "UCmIu_lfYrSnfnNhH6kmcG2Q",
                    "title": "JavaScript Interview Questions in One Video | JavaScript in Hindi",
                    "description": "This video compiles Advance concepts of JavaScript for interviews. These concepts are important for greater JavaScript ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/gUUCmRJjVvo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/gUUCmRJjVvo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/gUUCmRJjVvo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Coder Dost",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-04-23T11:17:39Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "pXnZ3tW5V5sqEyc12eyJTN2ANxY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "EerdGm-ehJQ"
                },
                "snippet": {
                    "publishedAt": "2024-05-09T07:28:14Z",
                    "channelId": "UCB6dvaWu0N8uVq2yKsZ5s5g",
                    "title": "JavaScript Tutorial Full Course - Beginner to Pro (2024)",
                    "description": "Certificates are now available! https://courses.supersimple.dev/courses/javascript Enroll to get a Certificate of Completion and ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/EerdGm-ehJQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/EerdGm-ehJQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/EerdGm-ehJQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "SuperSimpleDev",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-05-09T07:28:14Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "j6C1OCk3p_j9qRlS_l_W6Msax4w",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "VlPiVmYuoqw"
                },
                "snippet": {
                    "publishedAt": "2023-12-21T14:39:41Z",
                    "channelId": "UCBwmMxybNva6P_5VmxjzwqA",
                    "title": "JavaScript Tutorial (2024) for Beginners to Pro (with Notes, Projects &amp; Practice Questions)",
                    "description": "Notes available at : https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl?usp=share_link Code for ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VlPiVmYuoqw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VlPiVmYuoqw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VlPiVmYuoqw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Apna College",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-12-21T14:39:41Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "RKeP6L2xWhLYllrREYV2Ffk8Epk",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "_va80fTQnk4"
                },
                "snippet": {
                    "publishedAt": "2024-10-23T06:07:42Z",
                    "channelId": "UCvHX2bCZG2m9ddUhwxudKYA",
                    "title": "Advance JavaScript Tutorial in Hindi #5: Destructuring Array and Object",
                    "description": "Hey there, JavaScript enthusiasts! In this video, we're diving deep into the world of destructuring in JavaScript. This powerful ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_va80fTQnk4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_va80fTQnk4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_va80fTQnk4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Code Step By Step",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-10-23T06:07:42Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "Wl_ZmwLNrs0dxCQHZMu-_3aSOQw",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "xc3a_CJhjCc"
                },
                "snippet": {
                    "publishedAt": "2022-11-29T02:43:06Z",
                    "channelId": "UCyFWoLmPTgZ3BkHIKMRSV1g",
                    "title": "JavaScript Mastery Complete Course | JavaScript Tutorial For Beginner to Advanced",
                    "description": "Course Level: Beginner This Specialization is intended for the learner with no previous programming experience or the ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xc3a_CJhjCc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xc3a_CJhjCc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xc3a_CJhjCc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Nerd's lesson",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-11-29T02:43:06Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "4mTbv20Yh9mgu4OEFdjqfVuAhuQ",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "1zCXuwjEsNs"
                },
                "snippet": {
                    "publishedAt": "2022-02-11T07:01:11Z",
                    "channelId": "UCWCGvAu1NDCldmLasELk62g",
                    "title": "Advanced JavaScript Tutorial in Hindi [Part 94] - JavaScript Callback Function",
                    "description": "Javascript #Tutorial #Hindi Link for Complete JavaScript Tutorial in Hindi for Beginners: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1zCXuwjEsNs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1zCXuwjEsNs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1zCXuwjEsNs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Tech Gun",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-02-11T07:01:11Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "PsAfG5F64-2V3Z6WPRSd6UzmoHk",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "sscX432bMZo"
                },
                "snippet": {
                    "publishedAt": "2023-08-27T03:53:27Z",
                    "channelId": "UCNQ6FEtztATuaVhZKCY28Yw",
                    "title": "Javascript in 1 shot in Hindi | part 1",
                    "description": "Visit https://chaicode.com for all related materials, community help, source code etc. 00:00:00 - Javascript for beginners 00:05:04 ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/sscX432bMZo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/sscX432bMZo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/sscX432bMZo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Chai aur Code",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-08-27T03:53:27Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "KbFYJqtV0gmc9e9EZK5CtcZPcjQ",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "lfmg-EJ8gm4"
                },
                "snippet": {
                    "publishedAt": "2024-01-01T14:30:18Z",
                    "channelId": "UC4SVo0Ue36XCfOyb5Lh1viQ",
                    "title": "JavaScript Full Course for free 🌐 (2024)",
                    "description": "javascript #tutorial #course ⭐Time Stamps⭐ #1 00:00:00 JavaScript tutorial for beginners #2 00:12:32 Variables #3 ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lfmg-EJ8gm4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lfmg-EJ8gm4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lfmg-EJ8gm4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Bro Code",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-01-01T14:30:18Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "WVUliaXfydPJdVQnpCsz5UGTIVU",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "BI1o2H9z9fo"
                },
                "snippet": {
                    "publishedAt": "2023-07-26T12:40:21Z",
                    "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
                    "title": "Modern JavaScript From The Beginning | First 12 Hours",
                    "description": "This is the first 12 hours of my 37-hour JavaScript course. In thes video we will go over the fundamentals in-depth. Get The Full ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/BI1o2H9z9fo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/BI1o2H9z9fo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/BI1o2H9z9fo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Traversy Media",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-07-26T12:40:21Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "MMqPqC22-I4Z3d_4D1YBWb-mTio",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "427pAhy9dI8"
                },
                "snippet": {
                    "publishedAt": "2024-05-05T13:30:01Z",
                    "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
                    "title": "Complete Java Script in One Shot 2024 | Basics to Advance | Full Stack Web Development Course",
                    "description": "Timestamps: 00:00 - 7:04 Setting up the environment for JS coding 7:05 - 34:15 Basic coding in javascript 34:16 - 43:32 Operators ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/427pAhy9dI8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/427pAhy9dI8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/427pAhy9dI8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "College Wallah",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-05-05T13:30:01Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "6q5rEGQW5oWuf8A0Ybk09jaY2Vw",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "ckdDIhQyK_A"
                },
                "snippet": {
                    "publishedAt": "2021-01-19T02:30:01Z",
                    "channelId": "UCuT0rj__qEq_ZO3kYwun4Qg",
                    "title": "Advance Javascript - OOP Introduction Tutorial in Hindi / Urdu",
                    "description": "In this tutorial you will learn javascript oop introduction tutorial in Hindi, Urdu.You can learn what is class and object in javascript ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ckdDIhQyK_A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ckdDIhQyK_A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ckdDIhQyK_A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Yahoo Baba",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-01-19T02:30:01Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "tGA-UDQy0hueR_qJORVPb_SomHU",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "d3jXofmQm44"
                },
                "snippet": {
                    "publishedAt": "2023-12-13T15:29:20Z",
                    "channelId": "UC1XBh-m27kkgwLAwu_SRJBg",
                    "title": "Lecture 12 : Callbacks, Promises &amp; Async Await | JavaScript Full Course",
                    "description": "Instagram : https://www.instagram.com/shradhakhapra/ ⭐️ LinkedIn : https://www.linkedin.com/in/shradha-khapra/ Notes ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/d3jXofmQm44/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/d3jXofmQm44/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/d3jXofmQm44/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Shradha Khapra",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-12-13T15:29:20Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "QIvZTpB32pWeDD6BOEist-cp5jA",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "_7IR39vOKfU"
                },
                "snippet": {
                    "publishedAt": "2023-08-26T15:15:02Z",
                    "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
                    "title": "5 Real-Life JavaScript Effects and Features That Reign Supreme! 👑🌐",
                    "description": "Ever wondered how those awesome animations on websites work? In this video, we're showing you 5 real-life tricks using ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_7IR39vOKfU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_7IR39vOKfU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_7IR39vOKfU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Sheryians Coding School",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-08-26T15:15:02Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "lE1W1o0cR2S8NlS7cZZNN97uru0",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "6kE8lrqfwHo"
                },
                "snippet": {
                    "publishedAt": "2023-07-30T17:15:00Z",
                    "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
                    "title": "Master Async JavaScript: What it is and How to Use it",
                    "description": "Asynchronous JavaScript is one of the most important topics in web development. It allows you to write code that can run in the ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6kE8lrqfwHo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6kE8lrqfwHo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6kE8lrqfwHo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Sheryians Coding School",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-07-30T17:15:00Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "4BmcnmRgnzDrFRppZw7ITyEun38",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "Pyv0tMm5i_w"
                },
                "snippet": {
                    "publishedAt": "2024-01-15T13:30:09Z",
                    "channelId": "UCkjoHfkLEy7ZT4bA2myJ8xA",
                    "title": "JavaScript Full Course For Beginners With JavaScript Projects Tutorial And Notes 2024",
                    "description": "JavaScript Complete Course For Beginners With 6 JavaScript Projects And Notes to Learn and Practice ❤️ Full JavaScript ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Pyv0tMm5i_w/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Pyv0tMm5i_w/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Pyv0tMm5i_w/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "GreatStack",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-01-15T13:30:09Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "7PrbkDCvny9iR8VeA_olK71vgww",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "6bmWUxz_a6o"
                },
                "snippet": {
                    "publishedAt": "2024-02-17T08:21:52Z",
                    "channelId": "UCdjDPQb6Ir5hmzlbh-OBw5g",
                    "title": "Advanced JavaScript in Tamil | Top Interview Topics",
                    "description": "Dive into the world of JavaScript with our comprehensive tutorial series! From essential concepts like variables and hoisting to ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6bmWUxz_a6o/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6bmWUxz_a6o/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6bmWUxz_a6o/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "JVL code",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-02-17T08:21:52Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "vLbBl40XfT1jTosv-3jc7u2n2VU",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "D8HyB-W7ToI"
                },
                "snippet": {
                    "publishedAt": "2023-08-30T08:00:10Z",
                    "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
                    "title": "💥 Mind-Blowing ES6 JavaScript Techniques Every Coder Should Know!",
                    "description": "Welcome to our coding tutorial! In this video, we're diving deep into the exciting world of ES6 JavaScript, and you won't believe ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/D8HyB-W7ToI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/D8HyB-W7ToI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/D8HyB-W7ToI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Sheryians Coding School",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-08-30T08:00:10Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "870lVHyAPDzuk5d8riERKKExh7Q",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "CfNsy4K9atY"
                },
                "snippet": {
                    "publishedAt": "2021-02-06T02:30:00Z",
                    "channelId": "UCuT0rj__qEq_ZO3kYwun4Qg",
                    "title": "Advance JavaScript - Promise Tutorial in Hindi / Urdu",
                    "description": "In this tutorial you will learn javascript promises tutorial in Hindi, Urdu.You can learn what is promises in javascript es6 version in ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CfNsy4K9atY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CfNsy4K9atY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CfNsy4K9atY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Yahoo Baba",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-02-06T02:30:00Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "UYPrpR_fESu38zxR4PS48eWBczs",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "NJwRQgsu1Q8"
                },
                "snippet": {
                    "publishedAt": "2023-07-19T21:02:59Z",
                    "channelId": "UCNQ6FEtztATuaVhZKCY28Yw",
                    "title": "Promise in javascript | chai aur #javascript",
                    "description": "Visit https://chaicode.com for all related materials, community help, source code etc. Sara code yaha milta h ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/NJwRQgsu1Q8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/NJwRQgsu1Q8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/NJwRQgsu1Q8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Chai aur Code",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-07-19T21:02:59Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "k8y3eBPa3lFwVwrTLZ4jrVhYg_E",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "VVvVxMOrh14"
                },
                "snippet": {
                    "publishedAt": "2022-05-04T16:55:06Z",
                    "channelId": "UCBwmMxybNva6P_5VmxjzwqA",
                    "title": "Ab India seekhega Coding ❤️",
                    "description": "shorts Guaranteed Placement Sheet : https://bit.ly/DSASheet Java Placement Course(with DSA) ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VVvVxMOrh14/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VVvVxMOrh14/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VVvVxMOrh14/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Apna College",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-05-04T16:55:06Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "2e6-9h3MWbKDSK3dtVMNfc5qgps",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "uud2HqN6pTA"
                },
                "snippet": {
                    "publishedAt": "2023-06-28T16:00:44Z",
                    "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
                    "title": "🔥 Master Advanced JavaScript: Join, Share &amp; Level Up! 🚀✨",
                    "description": "Get ready to level up your JavaScript skills! In this exciting tutorial, we dive deep into advanced JavaScript concepts, techniques, ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uud2HqN6pTA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uud2HqN6pTA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uud2HqN6pTA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Sheryians Coding School",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-06-28T16:00:44Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "0bFMoEsVXkXglKQsGcVlMQFqjTk",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "qJGR9lLcRc0"
                },
                "snippet": {
                    "publishedAt": "2023-05-19T14:30:15Z",
                    "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
                    "title": "25 Mind-Blowing Practice Questions, Master JavaScript, Can You Solve Them All ?",
                    "description": "Crack 25 JavaScript Questions: Boost Your Skills and Conquer Coding Challenges!\" Get ready for an exhilarating JavaScript ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qJGR9lLcRc0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qJGR9lLcRc0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qJGR9lLcRc0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Sheryians Coding School",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-05-19T14:30:15Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "t3yqo0v47LA88WgXGLpR4SFaIv0",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "cpoXLj24BDY"
                },
                "snippet": {
                    "publishedAt": "2023-10-06T02:40:47Z",
                    "channelId": "UC7uzuZJIYzcxV9JJ1yAtHHg",
                    "title": "🚀 🔥 JavaScript Complete Course (2024) 4 Projects | Notes | GitHub | Free Certification",
                    "description": "For MERN stack admission queries, message us or WhatsApp on +91-8000121313 - GitHub Code Repo: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/cpoXLj24BDY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/cpoXLj24BDY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/cpoXLj24BDY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Complete Coding by Prashant Sir",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-10-06T02:40:47Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "tSvWPt3Z8mRZnXcXq6-ZnxXkr3k",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "13gLB6hDHR8"
                },
                "snippet": {
                    "publishedAt": "2024-02-14T13:30:01Z",
                    "channelId": "UCwfaAHy4zQUb2APNOGXUCCA",
                    "title": "JavaScript Full Course Tutorial for Beginners in Hindi🔥Free Notes with 10+ Projects | P-1",
                    "description": "Become a JavaScript Master in One Video in Hindi Welcome to our complete JavaScript Course Tutorial for Beginners in Hindi, ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/13gLB6hDHR8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/13gLB6hDHR8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/13gLB6hDHR8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Thapa Technical",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-02-14T13:30:01Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "JIzqOog7N4y9cZHZ6GLFKjJuWRA",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "QmfyWw3Cth8"
                },
                "snippet": {
                    "publishedAt": "2024-04-19T13:44:29Z",
                    "channelId": "UCbK5xfFYH99Hu2pl4CBarNg",
                    "title": "2.5 Years Experienced Best JavaScript Interview",
                    "description": "Grab ProCodrr Launch Offer Now: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/QmfyWw3Cth8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/QmfyWw3Cth8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/QmfyWw3Cth8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Anurag Singh ProCodrr",
                    "liveBroadcastContent": "none",
                    "publishTime": "2024-04-19T13:44:29Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "WtF7WQC9Kc8_NQcfVUKO2zJ_eD4",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "chx9Rs41W6g"
                },
                "snippet": {
                    "publishedAt": "2021-10-09T03:30:03Z",
                    "channelId": "UCrkQMtWNtuq-1j0q8c2RVeQ",
                    "title": "JavaScript |  Beginning to Mastery Complete Tutorial (Part 1)",
                    "description": "Complete modern javascript/es6 tutorial in Hindi (2021) Source code ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/chx9Rs41W6g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/chx9Rs41W6g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/chx9Rs41W6g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Harshit vashisth",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-10-09T03:30:03Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "07y99ZU6Es0sCwDCCveYRVMA5w0",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "FDZIt1MDuBI"
                },
                "snippet": {
                    "publishedAt": "2021-01-23T02:30:00Z",
                    "channelId": "UCuT0rj__qEq_ZO3kYwun4Qg",
                    "title": "Advance Javascript - Modules Tutorial in Hindi / Urdu",
                    "description": "In this tutorial you will learn javascript modules tutorial in Hindi, Urdu.You can learn what is modules in javascript es6 version in ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FDZIt1MDuBI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FDZIt1MDuBI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FDZIt1MDuBI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Yahoo Baba",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-01-23T02:30:00Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "_CflfUfwq1jyaqkiSgMm7ZAIQLk",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "urCmTFBoRNU"
                },
                "snippet": {
                    "publishedAt": "2023-10-04T06:47:55Z",
                    "channelId": "UCi-6IBp5z7BeAnGbe6NlIgA",
                    "title": "Javascript roadmap to master from basics to advance#javascript#roadmap#html#css",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/urCmTFBoRNU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/urCmTFBoRNU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/urCmTFBoRNU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Mobile Programmer",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-10-04T06:47:55Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "vDdxe0aIDmTN86i5P2ZJ9a6m_wY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "wZAOpB8nbIA"
                },
                "snippet": {
                    "publishedAt": "2023-05-20T16:30:14Z",
                    "channelId": "UCfbNaJ1SKqS4200JODOc0sg",
                    "title": "Javascript Interview Question Advance #javascript",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wZAOpB8nbIA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wZAOpB8nbIA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wZAOpB8nbIA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "codieRaja",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-05-20T16:30:14Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "SBsT8Y_esF9HjoetNLp6CGBFznM",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "2ZNbdUyjGUY"
                },
                "snippet": {
                    "publishedAt": "2021-01-20T16:07:50Z",
                    "channelId": "UCuT0rj__qEq_ZO3kYwun4Qg",
                    "title": "Advance Javascript - Class Inheritance Tutorial in Hindi / Urdu",
                    "description": "In this tutorial you will learn javascript class inheritance introduction tutorial in Hindi, Urdu.You can learn what is inheritance in ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2ZNbdUyjGUY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2ZNbdUyjGUY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2ZNbdUyjGUY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Yahoo Baba",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-01-20T16:07:50Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "LY2eJ47016UKWp5yjtvCgzXPYAY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "GjHFfCpkdR0"
                },
                "snippet": {
                    "publishedAt": "2021-01-14T10:28:28Z",
                    "channelId": "UCuT0rj__qEq_ZO3kYwun4Qg",
                    "title": "Advance JavaScript - Destructuring Array Tutorial in Hindi / Urdu",
                    "description": "In this tutorial you will learn javascript destructuring array tutorial in Hindi, Urdu.You can learn what is Destructuring Array in ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GjHFfCpkdR0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GjHFfCpkdR0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GjHFfCpkdR0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Yahoo Baba",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-01-14T10:28:28Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "zQQ9QKkF2BfRnjqxgAXzCcye0iQ",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "F8D4EDCKtnE"
                },
                "snippet": {
                    "publishedAt": "2023-05-19T06:07:44Z",
                    "channelId": "UCPyt-aC-P5EXBsToaQxzaCQ",
                    "title": "Destructuring Object with Allies Name Advance Javascript Course || #course #javascript #object",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/F8D4EDCKtnE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/F8D4EDCKtnE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/F8D4EDCKtnE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Mr ZeD _",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-05-19T06:07:44Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "emNHtWAIxv7uZ5jiKTZndVSRptY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "_iS6aLgk5gQ"
                },
                "snippet": {
                    "publishedAt": "2021-01-05T15:02:30Z",
                    "channelId": "UCuT0rj__qEq_ZO3kYwun4Qg",
                    "title": "Advance JavaScript - Arrow Functions Tutorial in Hindi / Urdu",
                    "description": "In this tutorial you will learn javascript arrow function tutorial in Hindi, Urdu.You can learn what is arrow functions in javascript es6 ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_iS6aLgk5gQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_iS6aLgk5gQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_iS6aLgk5gQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Yahoo Baba",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-01-05T15:02:30Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "Cy9855JF-VPw-TJg43SwUpi30K8",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "bTt6bodqhi0"
                },
                "snippet": {
                    "publishedAt": "2023-04-24T02:31:46Z",
                    "channelId": "UCPJOMn16RyDmSA-lzHtqjkw",
                    "title": "Advance JavaScript Concept 🔥🔥 | Optional Chaining",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bTt6bodqhi0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bTt6bodqhi0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bTt6bodqhi0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "LwC Live with Care ",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-04-24T02:31:46Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "ipvqXqUddLwtNbZAKZkolgTm9yY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "S3I3j6zRZFw"
                },
                "snippet": {
                    "publishedAt": "2021-09-09T06:00:05Z",
                    "channelId": "UCUUoptUzynaim8aJf-0Equw",
                    "title": "JavaScript Alert Confirm, Prompt | Lesson 8 | JavaScript Tutorial Beginning to Advance in Hindi/Urdu",
                    "description": "In this video, we will learn about the three default functions of Javascript. alert() confirm() prompt() About This Course In this JS ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/S3I3j6zRZFw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/S3I3j6zRZFw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/S3I3j6zRZFw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Learn With Aamir",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-09-09T06:00:05Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "HqWZ3ly496ZYdV0ToBTeBG6Y-QQ",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "L1cdcfLWJtM"
                },
                "snippet": {
                    "publishedAt": "2023-12-13T03:30:09Z",
                    "channelId": "UC-L9h5r2GtWunA1hxYvl8pQ",
                    "title": "JavaScript Project Ideas | Easy | Medium | Advance  #coding #development #javascript",
                    "description": "Build JavaScript Project that help you to grow in web development. 1. Easy - Calculator - Image Slider - Gradient Generator 2.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/L1cdcfLWJtM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/L1cdcfLWJtM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/L1cdcfLWJtM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Gagan Saini",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-12-13T03:30:09Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "AoT2EtJMWFQ633xuqKz07Y1QS9s",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "veVrPZzxY9A"
                },
                "snippet": {
                    "publishedAt": "2020-08-19T14:00:09Z",
                    "channelId": "UCKQOUcqLLQXWLKUAQbfKiNQ",
                    "title": "5 Best Javascript books I recommend - Beginner to Advance",
                    "description": "5 Best javascript books that I prefer everyone should I read. I have never said in this video that I have read all of them cover to ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/veVrPZzxY9A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/veVrPZzxY9A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/veVrPZzxY9A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Innovative Coder (Jerry Sawhney)",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-08-19T14:00:09Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "Z7vHJT0FlYIM3b0-rTwM86zXt1I",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "ysQFRsYv5VM"
                },
                "snippet": {
                    "publishedAt": "2021-01-07T15:21:27Z",
                    "channelId": "UCuT0rj__qEq_ZO3kYwun4Qg",
                    "title": "Advance JavaScript - Spread Operator Tutorial in Hindi / Urdu",
                    "description": "In this tutorial you will learn javascript spread operator tutorial in Hindi, Urdu.You can learn what is spread operator in javascript ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ysQFRsYv5VM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ysQFRsYv5VM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ysQFRsYv5VM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Yahoo Baba",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-01-07T15:21:27Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "MLfNWKO-jiXIsfUGl5ljmbCwg0o",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "XFEAMyB85RA"
                },
                "snippet": {
                    "publishedAt": "2021-03-08T12:11:40Z",
                    "channelId": "UCuT0rj__qEq_ZO3kYwun4Qg",
                    "title": "Advance JavaScript - Async &amp; Await Tutorial in Hindi / Urdu",
                    "description": "In this tutorial you will learn javascript async and await method tutorial in Hindi, Urdu.You can learn how to use async and await to ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XFEAMyB85RA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XFEAMyB85RA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XFEAMyB85RA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Yahoo Baba",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-03-08T12:11:40Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "HWbKLJgS8ciBy7QIIFTd_of3VfI",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "4bMQjDrsMwE"
                },
                "snippet": {
                    "publishedAt": "2021-03-01T11:19:41Z",
                    "channelId": "UCuT0rj__qEq_ZO3kYwun4Qg",
                    "title": "Advance JavaScript - Ajax Tutorial in Hindi / Urdu",
                    "description": "In this tutorial you will learn javascript ajax tutorial in Hindi, Urdu.You can learn how to use ajax in javascript xmlhttprequest to ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4bMQjDrsMwE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4bMQjDrsMwE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4bMQjDrsMwE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Yahoo Baba",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-03-01T11:19:41Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "Fz1aACxW-dDcGGpSXQLsn0aTnfI",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "nbQRseqhnXU"
                },
                "snippet": {
                    "publishedAt": "2023-05-20T12:06:23Z",
                    "channelId": "UCRRokTHI6sTIiD1mI9Aw4bQ",
                    "title": "Basic to Advance JavaScript Q&amp;A Challenge | Q-4 | @codeguyakash #shorts #short",
                    "description": "Talky Beat by Twin Musicom is licensed under a Creative Commons Attribution 4.0 license.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/nbQRseqhnXU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/nbQRseqhnXU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/nbQRseqhnXU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "codeguyakash",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-05-20T12:06:23Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "Z1BBH0cABgsTt-aYoW1cHTB0vfU",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "hkomjrPPT0Q"
                },
                "snippet": {
                    "publishedAt": "2023-03-08T10:30:19Z",
                    "channelId": "UCYiTHrv4kzJjbqspWPmONUg",
                    "title": "#5 Advance JavaScript Rest Operator Tutorial  In Hindi | Advance JavaScript Tutorial In Hindi",
                    "description": "In this tutorial you will learn Advance JavaScript Rest Operator Tutorial In Hindi. You can learn what is rest operator in JavaScript ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hkomjrPPT0Q/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hkomjrPPT0Q/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hkomjrPPT0Q/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CODE4EDUCATION",
                    "liveBroadcastContent": "none",
                    "publishTime": "2023-03-08T10:30:19Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "SSEeGXWPJwTc1TGHRqbRv6AEY-I",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "LMSkFjWbyoc"
                },
                "snippet": {
                    "publishedAt": "2018-11-17T16:44:02Z",
                    "channelId": "UCrG2Z0usOCCdUTAr4D1A8mw",
                    "title": "Understand what is Prototype? Advance JavaScript Tutorial Part - 47",
                    "description": "Understand what is Prototype? Advanced JavaScript Tutorial Part - 47 Learn More From Our Website:- www.dailywebtuition.com ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LMSkFjWbyoc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LMSkFjWbyoc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LMSkFjWbyoc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Daily Tuition",
                    "liveBroadcastContent": "none",
                    "publishTime": "2018-11-17T16:44:02Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "THEG0eyKRdrYlbZtJBbeR-P2rGw",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "4F-KvIOdMV4"
                },
                "snippet": {
                    "publishedAt": "2022-12-26T09:56:28Z",
                    "channelId": "UCmrEy86Z3QiwHAFN658NAqQ",
                    "title": "Closure In JavaScript ¦ Frontend Interview Question ¦ Advance JavaScript #shorts #javascript #viral",
                    "description": "Closure In JavaScript ¦ Frontend Interview Question ¦ Advance JavaScript #shorts #javascript #viral . Visit youtube channel ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4F-KvIOdMV4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4F-KvIOdMV4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4F-KvIOdMV4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Nested Coding",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-12-26T09:56:28Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "RwaSYgYZhL-akgs6LlgfWKhr-jg",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "sYrEMN_PZzU"
                },
                "snippet": {
                    "publishedAt": "2017-08-16T04:42:08Z",
                    "channelId": "UCAQjmY2DJqwU3Eqz0oN83aw",
                    "title": "Advance JavaScript for Coders | Primitive Data Types | What You Need to Remember | Part 2",
                    "description": "In this tutorial, you will learn small things to remember while learning advanced Javascript for coders. If you are new in JavaScript ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/sYrEMN_PZzU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/sYrEMN_PZzU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/sYrEMN_PZzU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Eduonix Learning Solutions",
                    "liveBroadcastContent": "none",
                    "publishTime": "2017-08-16T04:42:08Z"
                }
            }
        ]
};

// Display thumbnails on page load
displayThumbnails(sampleData.items);

// Search functionality
youtubeSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = search_box.value;
    let valuesForUrl = {
        key: "AIzaSyD9NZ1estPeq_RfjEPiyMwqykH2ioZcB2k",
        part: 'snippet',
        q: searchValue,
        type: 'video',
        maxResults: 50
    };
    
    let {key, part, q, type, maxResults} = valuesForUrl;

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&part=${part}&q=${q}&type=${type}&maxResults=${maxResults}`)
    .then(response => response.json())
    .then(data => {
        displayThumbnails(data.items);
    })
    .catch(err => console.log(err));
});

// Function to display thumbnails
function displayThumbnails(arr) {
    videoSection.innerHTML = ''; // Clear previous videos

    arr.forEach(t => {
        let card = document.createElement('div');
        card.className = 'youtube-card';
        
        let imgTag = document.createElement('img');
        imgTag.src = t.snippet.thumbnails.medium.url;
        
        let para = document.createElement('p');
        para.innerText = t.snippet.title;

        card.append(imgTag, para);

        // Add click event to open video page in new tab
        card.addEventListener("click", () => {
            const videoId = t.id.videoId;
            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        });

        videoSection.append(card);
    });
}



// Check if SpeechRecognition API is supported
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
    recognition.continuous = false; // Stop after one phrase
    recognition.interimResults = false; // Only final results
    recognition.lang = 'en-US'; // Set language to English (US)
}

// Microphone icon
let micIcon = document.querySelector('.mic_icon');
let search_voice = document.querySelector('#search'); // Assuming the input field has this ID

// Start listening when microphone icon is clicked
micIcon.addEventListener('click', () => {
    if (!recognition) {
        alert("Your browser doesn't support speech recognition.");
        return;
    }
    recognition.start();
});

// Process the result when speech is recognized
recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    search_voice.value = transcript; // Set the recognized text to the search voice input
});

// Handle errors
recognition.addEventListener('error', (event) => {
    console.error("Speech recognition error detected: " + event.error);
});



// Handle errors
recognition.addEventListener('error', (event) => {
    console.error("Speech recognition error detected: " + event.error);
});
micIcon.addEventListener('click', () => {
    if (!recognition) {
        alert("Your browser doesn't support speech recognition.");
        return;
    }
    micIcon.classList.add('listening'); // Add effect
    recognition.start();
});

recognition.addEventListener('end', () => {
    micIcon.classList.remove('listening'); // Remove effect
});

