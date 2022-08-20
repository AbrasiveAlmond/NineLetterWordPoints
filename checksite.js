console.log("You are currenly on the correct nine letter word website")
var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

let btn = document.createElement("button");
btn.innerHTML = "Check Points";
// btn.onclick = 
function calcTotalPoints() {
  // Creates a pointer to the correct guesses on the website, 
  // this could be combined with the next line into one statement
  alert("Working")
  const right_guesses = document.getElementById('right_guesses');
  // Creates a list of words from the website
  // The words come seperated by \n
  console.log(right_guesses)
  const list_words = (right_guesses.innerText).split("\n");
  let total_points = 0
  // for each word, calculate how many points its worth
  for (const word of list_words) {
    if (word.length > 4 && word.length < 9) {
      total_points += word.length-3
    } else { total_points += 10 }}
  alert(total_points)
  return total_points
}

document.body.appendChild(btn);

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("https://nineletterword.tompaton.com/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: calcTotalPoints
    });
  }
});

