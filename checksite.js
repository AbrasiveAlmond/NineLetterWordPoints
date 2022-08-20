console.log("You are currenly on the correct nine letter word website");
var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

let btn = document.createElement("button");
btn.innerHTML = "Check Points";
btn.onclick = function () {
  alert("Button is clicked");
  var script = document.createElement('script');
	script.textContent = 'console.log(GUESSES);';
	(document.head||document.documentElement).appendChild(script);
};
document.body.appendChild(btn);

function parseList(){
	// The goal here is to get the guesses varible and 
}

