const input = document.getElementById("domainInput");
const addBtn = document.getElementById("add");
const list = document.getElementById("domainList");

function refreshList() {
  chrome.storage.sync.get({ bannedDomains: [] }, ({ bannedDomains }) => {
    list.innerHTML = "";
    bannedDomains.forEach(domain => {
      const li = document.createElement("li");
      li.textContent = domain;

      const del = document.createElement("button");
      del.textContent = "✕";
      del.style.marginLeft = "8px";
      del.onclick = () => {
        const filtered = bannedDomains.filter(d => d !== domain);
        chrome.storage.sync.set({ bannedDomains: filtered }, refreshList);
      };

      li.appendChild(del);
      list.appendChild(li);
    });
  });
}

addBtn.onclick = () => {
  const domain = input.value.trim();
  if (!domain) return;

  chrome.storage.sync.get({ bannedDomains: [] }, ({ bannedDomains }) => {
    if (!bannedDomains.includes(domain)) {
      bannedDomains.push(domain);
      chrome.storage.sync.set({ bannedDomains }, () => {
        input.value = "";
        refreshList();
      });
    }
  });
};

refreshList();
