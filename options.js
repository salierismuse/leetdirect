document.getElementById("save").addEventListener("click", () => {
	const input = document.getElementById("domains").value;
	const domains = input.split("\n").map(d => d.trim()).filter(Boolean);
	chrome.storage.sync.set({ bannedDomains: domains });
});
