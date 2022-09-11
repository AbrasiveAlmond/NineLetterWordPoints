# NineLetterWordPoints
A chrome extension to calculate points for https://nineletterword.tompaton.com/

## Explaination
Nineletterword.tompation is a website designed to test your ability to find words from letters. 
The limitations of this are that the words have to be "Common", Only use each given letter once, and have a length of 4-9 charecters

## Todo:
 - Make a consistent colour theme on website and popup
   - White / gray with green accent
 - Remove unnessary folders and files
 - ~~Make new logo~~
 - ~~Link extension to dev account~~
 - ~~Think of name for extension and dev account~~
 - Refactor names of most files
 - ~~Fix or delete old popup.html file - Its not needed~~
 - Stylise website (Nothing crazy - It's almost plain html atm)
 - ~~Try updating points every new guess~~
   - ~~This will involve injecting an extra function on the Guess button (id="move_button")~~
 - Confetti animation when a certain point threshold is beaten
   - ~~Remeber high scores \- could use a webhost like aws with a docker container or cookies 🍪🍪🍪~~
 - ~~Turn into a Chrome Extension~~
 - ~~Get word from html element & Turn it into a JavaScript list~~
 - ~~Get length of a word via JavaScript~~
 - ~~Add a Javascipt array for calculating points from a length value~~
 
## Install from webstore
1. Go to [The webstore](https://chrome.google.com/webstore/detail/ggddjojlialohenbgkdnihnbggklcbjl/)
2. Click "Add to chrome"
3. Press "Add extension"
4. Reload!
 
## Installation from source
- THIS WILL NOT WORK ON A SCHOOL EMAIL; USE A PERSONAL ACCOUNT
1. Download with either git or the green button at the top of the page.
2. Unzip the download
3. Goto "Chrome://Extensions"
4. Click on the switch called "Developer Mode"
5. Press "Load unpacked". This will open up your file explorer.
6. Navagate to where you unziped the files and open that folder.
7. Reload "https://nineletterword.tompaton.com/".
8. The extension will run automagically when you press the guess button.
