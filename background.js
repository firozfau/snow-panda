const blocklist = [
    "*://*.doubleclick.net/*",
    "*://*.adservice.google.com/*",
    "*://*.ads.yahoo.com/*",
    "*://*.facebook.com/*"
  ];
  
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => ({ cancel: true }),
    { urls: blocklist },
    ["blocking"]
  );
  