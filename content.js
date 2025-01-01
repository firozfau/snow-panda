// Function to remove YouTube ads
function removeYouTubeAds() {
  // Selectors for ad elements
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

  // Remove all elements matching the selectors
  adSelectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => ad.remove());
  });

  // Reset the player state
  const moviePlayer = document.querySelector("#movie_player");
  if (moviePlayer) {
      moviePlayer.classList.remove("ad-showing", "ad-interrupting");
  }
}

// Observe DOM changes to dynamically handle ads
const observer = new MutationObserver(() => {
  removeYouTubeAds();
});

// Start observing the body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Initial call to remove ads
removeYouTubeAds();
