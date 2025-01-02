// Function to check for ads and handle them
function checkAndHandleAds() {
  // Ad-specific selectors to monitor
  const adSelectors = [
      "#ad-avatar-lockup-card",
      "#ytp-ad-player-overlay-layout",
      "#ad-button",
      ".video-ads",
      ".ytp-ad-module",
      ".ytp-ad-badge",
      ".ytp-ad-player-overlay",
      ".ytp-ad-overlay-container",
      ".ytp-ad-interrupting",
      ".ytp-skip-ad-button",
      ".ytp-ad-progress"
  ];

  // Check if any of the ad elements exist
  let adFound = false;
  adSelectors.forEach(selector => {
      const adElement = document.querySelector(selector);
      if (adElement) {
          adFound = true;
          adElement.remove(); // Remove the ad element
      }
  });

  // Handle ad badge specifically
  const adBadges = document.querySelectorAll('div[id^="ad-badge"]');
  if (adBadges.length > 0) {
      adFound = true;
      adBadges.forEach(badge => badge.remove());
  }



  const adBoxActive = document.querySelectorAll('div[class^="video-ads"]');
  if (adBoxActive !=undefined) {
      adFound = true; 
  }




  // If ads were found, reset video player and set duration to skip ad
  if (adFound) {
      const videoPlayer = document.querySelector("#movie_player");
      if (videoPlayer) {
          videoPlayer.classList.remove("ad-showing", "ad-interrupting");

          // Skip video duration to bypass the ad
          const video = document.querySelector("video.html5-main-video");
          if (video) {
              video.currentTime = video.duration; // Skip to end of ad
          }
      }
  }
}

// Run the check every second
setInterval(checkAndHandleAds, 1000);
