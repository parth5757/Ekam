// Remove Instagram reels and YouTube shorts pages
if (window.location.href.includes("https://www.linkedin.com/feed/")) {
  alert("You're on a LinkedIn feed page transfer you to LinkedIn jobs page");
  window.location.href = "https://www.linkedin.com/jobs/";
}
if (window.location.href.includes("https://www.instagram.com/reels/")) {
  window.location.href = "https://www.instagram.com";
}
if(window.location.href.includes("https://www.instagram.com")){
  removeReelsButton();  
}
if (window.location.href.includes("https://www.instagram.com/explore/")) {
  window.location.href = "https://www.instagram.com";
}
if (window.location.href.includes("https://www.youtube.com/shorts/")) {
  window.location.href = "https://www.youtube.com";
}

// Remove instagram reels sidebar button
function removeReelsButton() {
  // Check if the current URL contains 'instagram.com'
  if (window.location.href.includes("https://www.instagram.com")) {
    const reelsButton = document.querySelector('a[href="/reels/"]'); // Target the Reels button by href
    if (reelsButton) {
      reelsButton.parentElement.remove(); // Remove the parent div
      console.log("✅ Reels button removed successfully.");
    }
  }
}

// Run the function when the DOM is fully loaded (only on Instagram)
window.addEventListener("load", () => {
  if (window.location.href.includes("https://www.instagram.com")) {
    setTimeout(removeReelsButton, 1000); // Delay to ensure DOM is ready
  }
});

// Run the function on URL changes (for SPA navigation on Instagram)
let lastUrl = window.location.href;
setInterval(() => {
  if (
    window.location.href !== lastUrl &&
    window.location.href.includes("https://www.instagram.com")
  ) {
    lastUrl = window.location.href;
    setTimeout(removeReelsButton, 1000);
  }
}, 1000);
function checkTitle() {
  const title = document.title;
  chrome.runtime.sendMessage({ type: "checkTitle", title: title });
}

let previousTitle = document.title;
setInterval(() => {
  if (document.title !== previousTitle) {
    previousTitle = document.title;
    checkTitle();
  }
}, 1000);

checkTitle(); // Initial check when the script runs
