//  Runs in the background on extention start 
// TODO: Call Guesses varible from nineletterword.tompaton.com
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({guesses});
  console.log('Default background color set to %cgreen', `color: ${color}`);
});