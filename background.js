const blocklist = [
   "*://*.doubleclick.net/*",
    "*://*.adservice.google.com/*",
    "*://*.youtube.com/api/stats/ads/*",
    "*://*.youtube.com/pagead/*",
    "*://*.googlevideo.com/videoplayback*ad*"
  ];
  
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => ({ cancel: true }),
    { urls: blocklist },
    ["blocking"]
  );
  