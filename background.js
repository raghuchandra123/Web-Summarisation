// Open the extension in a new tab when the extension icon is clicked
chrome.action.onClicked.addListener((activeTab) => {
  showSummary(activeTab.id);
  chrome.tabs.create({
    url: 'tabs/index.html'  // Specify the HTML file you want to open in the new tab
  });
});
// Function to extract content from the page
async function showSummary(tabId) {
  const tab = await chrome.tabs.get(tabId);

  // Only proceed if the tab's URL starts with 'http' (i.e., it's a webpage)
  if (!tab.url.startsWith('http')) {
    return;
  }

  // Inject the content extraction script into the tab
  const injection = await chrome.scripting.executeScript({
    target: { tabId },
    files: ['scripts/extract-content.js']
  });

  // Store the extracted content in session storage
  console.log("Summarizer API available:", injection[0].result);
  chrome.storage.session.set({ pageContent: injection[0].result });
}
