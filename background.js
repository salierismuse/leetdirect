chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = easyProblems[Math.floor(Math.random() * easyProblems.length)];

    chrome.storage.local.get({ visited: [] }, (data) => {
      const updated = [...data.visited, url];
      chrome.storage.local.set({ visited: updated });
    });

    return { redirectUrl: url };
  },
  { urls: ["*://x.com/*", "*://instagram.com/*", "*://tiktok.com/*"] },
  ["blocking"]
);
