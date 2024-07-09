chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentOriginal.js']
      });
    });
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['contentOriginal.js']
    });
  }
});