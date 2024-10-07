// Remove Instagram reels and YouTube shorts pages
if (window.location.href.includes("https://www.linkedin.com/feed/")) {
  alert("You're on a LinkedIn feed page transfer you to LinkedIn jobs page");
  window.location.href = "https://www.linkedin.com/jobs/";
}
if (window.location.href.includes("https://www.instagram.com/reels/")) {
  window.location.href = "https://www.instagram.com";
}
if (window.location.href.includes("https://www.instagram.com/explore/")) {
  window.location.href = "https://www.instagram.com";
}
if (window.location.href.includes("https://www.youtube.com/shorts/")) {
  window.location.href = "https://www.youtube.com";
}
if (window.location.href.includes("https://www.bing.com")) {
  // Wait for the DOM to fully load first
  window.onload = function() {
    setTimeout(function() {
      const anchorTags = document.querySelectorAll('a');
      // console.log(anchorTags);
      // check is there any anchortag or not 
      if(anchorTags.length>0){
        // Loop through each anchor tag and remove the target attribute
        anchorTags.forEach(anchor => {
          anchor.removeAttribute('target');
        });
        //Trigger alert when all anchor tag are processed
        console.log("All done good to go.")
      }
    }, 5000);
  };
}

if (window.location.href.includes("https://www.instagram.com/explore/")) {
  
}

function checkTitle() {
    const title = document.title;
    chrome.runtime.sendMessage({ type: 'checkTitle', title: title });
  }
  
  let previousTitle = document.title;
  setInterval(() => {
    if (document.title !== previousTitle) {
      previousTitle = document.title;
      checkTitle();
    }
  }, 1000);
  
  checkTitle(); // Initial check when the script runs
  