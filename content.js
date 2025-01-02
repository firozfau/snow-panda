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



  const adBoxActive = document.querySelectorAll('div[class*="ytp-ad-player-overlay-layout__player-card-container"]')[0];
  if(adBoxActive!=undefined){
    if (adBoxActive.length > 0) {
        adFound = true; 
    }
  }





  // If ads were found, reset video player and set duration to skip ad
  if (adFound) {
      const videoPlayer = document.querySelector("#movie_player");
      if (videoPlayer) {
          videoPlayer.classList.remove("ad-showing", "ad-interrupting");

          const video = document.querySelector("video.html5-main-video");
        const videoStream = document.querySelector("video.video-stream");
        if (video || videoStream) {
            (video || videoStream).currentTime = (video || videoStream).duration; // Skip to end of ad

            adFound = false; 
        }



      }
  }
}

// Run the check every second
setInterval(checkAndHandleAds, 1000);
