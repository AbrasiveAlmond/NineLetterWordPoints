chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ---------------------------------------------------------- //
		// This part of the script triggers when page is done loading //

		// // Creates the button
		// var button = document.createElement("button");
		// // Creates the text
   		// var text = document.createTextNode("Tally Points");
		// button.appendChild(text);
		// // Finds an existing element and appends it
		// var element = document.getElementById("result");
		// element.after(button);
		// // Adds id for css
		// button.setAttribute("id", "button");
		// button.setAttribute("class", "button");
		// button.setAttribute("role", "button");

		var points_div = document.createElement("p");
		var points_text = document.createTextNode("0 Points");
		points_div.appendChild(points_text)
		var element = document.getElementById("result");
		element.before(points_div);
		points_div.setAttribute("id", "score")

		// Add javascript function to input field on keypress
		var guess_field = document.getElementById("guess");
		// guess_field.setAttribute("onkeyup", "calcTotalPoints")

		// button.onclick = function calcTotalPoints()
		guess_field.onkeyup = function calcTotalPoints() {
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
			// 1 point and n points
			if (total_points == 1) {document.getElementById("score").innerHTML = total_points+" Point"}
			else {document.getElementById("score").innerHTML = total_points+" Points"}
			
		}
		
		// Colour score baseed off distance from highscore
		function calcHueShift() {
			// Personal Highscore
			highScore = 10
			OldRange = highScore
			NewRange = 120

			// Calculate where value lies between 0 and 120
			// variable is used to hue shift in css
			HueShift = (((OldValue) * NewRange) / OldRange)

		}
		// ---------------------------------------------------------- //

	}
	}, 10);
});