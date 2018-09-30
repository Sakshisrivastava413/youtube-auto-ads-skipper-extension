console.log("chrome extension go!")

// CSS selector of 'Skip Ad' button
let selector = "#movie_player > div.video-ads > div > div > div.videoAdUiSkipContainer.html5-stop-propagation > button";

setInterval(() => {
  console.log("hi")
  Array.from(document.querySelectorAll(selector)).forEach(button => button.click());
}, 500)


