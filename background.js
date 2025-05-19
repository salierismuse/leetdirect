

function getProblem() {
  const i = Math.floor(Math.random() * easyProblems.length);
  return easyProblems[i];
}

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = getProblem();

    chrome.storage.local.get({ visited: [] }, (data) => {
      const updated = [...data.visited, url];
      chrome.storage.local.set({ visited: updated });
    });

    return { redirectUrl: url };
  },
  { urls: ["*://x.com/*"] },
  ["blocking"]
);
