document.addEventListener("DOMContentLoaded", () => {
    const adSelectors = [
      "iframe[src*='ads']",
      "div[class*='ad']",
      "div[id*='ad']"
    ];
    
    adSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((ad) => ad.remove());
    });
  });
  