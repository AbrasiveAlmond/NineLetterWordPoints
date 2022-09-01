chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		// ------------------------START------------------------------ //
		// This part of the script triggers when page is done loading //

		function deleteCookie(name, path, domain) {
			if( getCookie(name) ) {
			  document.cookie = name +
				((path) ? ";path="+path:"")+
				((domain)?";domain="+domain:"") +
				";expires=Thu, 01 Jan 1970 00:00:01 GMT";
			}
		}

		function setCookie(cname, cvalue, exdays) {
			const d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			let expires = "expires="+ d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}

		function getCookie(cname) {
			let name = cname + "=";
			let decodedCookie = decodeURIComponent(document.cookie);
			let ca = decodedCookie.split(';');
			for(let i = 0; i <ca.length; i++) {
			  let c = ca[i];
			  while (c.charAt(0) == ' ') {
				c = c.substring(1);
			  }
			  if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			  }
			}
			return "";
		}

		function checkCookie() {
			let username = getCookie("username");
			if (username != "") {
			 alert("Welcome again " + username);
			} else {
			  username = prompt("Please enter your name:", "");
			  if (username != "" && username != null) {
				setCookie("username", username, 365);
			  }
			}
		  }

		// set highscore cookie the first time extension is activated
		// console.log(getCookie("highScore"))
		if (getCookie("highScore") == "") {setCookie("highScore", 10, 3000)}

		// console.log(document.cookie)


		// Creates script needed for confetti
		var confettiScriptSource = document.createElement("script")
		confettiScriptSource.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js')
		var element = document.getElementById("game");
		element.before(confettiScriptSource)

		var confettiScriptRun = document.createElement("script")
		// confettiScriptRun.setAttribute("type", "module")
		// confettiScriptCode = document.createTextNode("import {confetti} from 'chrome-extension://igbfdkfinjjmdnmcdkhgkffplkpglpno/src/inject/inject.js'; confetti;")
		confettiScriptCode = document.createTextNode("confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });")
		confettiScriptRun.appendChild(confettiScriptCode)
		var element = document.getElementById("game");
		element.before(confettiScriptRun)

		// Creates The Points Counter
		var pointsDiv = document.createElement("p");
		var pointsText = document.createTextNode("0 Points");
		pointsDiv.appendChild(pointsText)
		var element = document.getElementById("result");
		element.before(pointsDiv);
		pointsDiv.setAttribute("id", "score")
		pointsDiv.setAttribute("class", "score")

		
		// Append javascript function to guessfield
		// **Calculates points on every key press
		var guessField = document.getElementById("guess");
		guessField.onkeyup = function calcTotalPoints() {
			// Creates a pointer to the correct guesses on the website, 
			// this could be combined with the next line into one statement
			const rightGuesses = document.getElementById('right_guesses');
			
			// Creates a list of words from the website
			// The words come seperated by \n
			const listWords = (rightGuesses.innerText).split("\n");
			// If theres no words then score == 0
			if (listWords[0] == ''){console.log("No correct guesses made"); return null}

			let totalPoints = 0
			// for each word, calculate how many points its worth
			for (const word of listWords) {
			  if (word.length >= 4 && word.length < 9) {
				totalPoints += word.length-3
			  } else { totalPoints += 10}};
			// 1 point and n points
			if (totalPoints == 1) {document.getElementById("score").innerHTML = totalPoints+" Point"}
			else {document.getElementById("score").innerHTML = totalPoints+" Points"}

			// Colour score baseed off distance from highscore
			// Personal Highscore
			highScore = 10
			OldRange = highScore
			NewRange = 120

			// Calculate where value lies between 0 and 120
			// variable is used to hue shift in css
			hueShift = (((totalPoints) * NewRange) / OldRange)
			hueShift = Math.min(120, hueShift)
			pointsDiv.style.color = `hsl(${hueShift}deg 80% 70%)`
			// console.log(getCookie("highScore"), typeof(getCookie("highScore")))
			if (totalPoints > parseInt(getCookie("highScore"))) {
				console.log("New Highscore")
			}
		}
		// -----------------------END----------------------------- //

	}
	}, 10);
});