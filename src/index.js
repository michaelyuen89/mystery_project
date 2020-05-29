import "./styles/index.scss";


// const testObj = {
//     key1: "hi",
//     key2: {
//         key3: "Hello",
//     },
// };

// const greeting = testObj?.key2?.key3 || testObj.key1;
// window.addEventListener("DOMContentLoaded", () => {
//     document.body.classList.add("center");
//     const card = document.createElement("div");
//     card.classList.add("card", "center");
//     card.innerHTML = `<h2>${greeting} World!</h2>`;
//     document.body.append(card);
// });


var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "jCtm12h0wkSlQxOdyQNJKvaLCe0ZJMG7EzTZ28N1";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function () {
    if (req.status === 200 && req.readyState === 4) {
        var response = JSON.parse(req.responseText);
        // document.getElementById("title").textContent = response.title;
        // document.getElementById("date").textContent = response.date;
        document.getElementById("pic").src = response.hdurl;
        document.getElementById("explanation").textContent = response.explanation;
    }
})


//https://api.nasa.gov/planetary/apod?api_key=jCtm12h0wkSlQxOdyQNJKvaLCe0ZJMG7EzTZ28N1&count=100

//https://open.nasa.gov/blog/explore-brand-new-updates-astronomy-picture-day-apod-api/