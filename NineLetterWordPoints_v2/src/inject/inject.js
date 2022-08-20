chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");

		// Creates the button
		var button = document.createElement("button");
		// Creates the text
   		var text = document.createTextNode("Tally Points");
		button.appendChild(text);
		// Finds an existing element and appends it
		var element = document.getElementById("game");
		element.after(button);
		// Adds id for css
		button.setAttribute("id", "new-game");
		button.setAttribute("class", "button")
		button.setAttribute("role", "button")


		button.onclick = function calcTotalPoints() {
			// Creates a pointer to the correct guesses on the website, 
			// this could be combined with the next line into one statement
			const right_guesses = document.getElementById('right_guesses');
			// Creates a list of words from the website
			// The words come seperated by \n
			const list_words = (right_guesses.innerText).split("\n");
			// If theres no words then score == 0
			if (list_words[0] == ''){
				console.log("No correct guesses made")
				return 0
			};
			
			let total_points = 0
			// for each word, calculate how many points its worth
			for (const word of list_words) {
			  if (word.length >= 4 && word.length < 9) {
				total_points += word.length-3
			  } else { total_points += 10}};
			alert(total_points)
			return total_points
		  }
		

		// ----------------------------------------------------------

	}
	}, 10);
});