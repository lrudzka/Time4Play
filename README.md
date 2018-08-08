# Time4Play

## Description
It is a game based on the Master Mind Board Game. 

### Master Mind Board Game - Wikipedia description: 
One player becomes the codemaker, the other the codebreaker. The codemaker chooses a pattern of four code pegs. Duplicates are allowed depending on player choice, so the player could even choose four code pegs of the same color. The chosen pattern is placed in the four holes covered by the shield, visible to the codemaker but not to the codebreaker.

The codebreaker tries to guess the pattern, in both order and color, within twelve (or ten, or eight) turns. Each guess is made by placing a row of code pegs on the decoding board. Once placed, the codemaker provides feedback by placing from zero to four key pegs in the small holes of the row with the guess. A colored or black key peg is placed for each code peg from the guess which is correct in both color and position. A white key peg indicates the existence of a correct color code peg placed in the wrong position.

If there are duplicate colours in the guess, they cannot all be awarded a key peg unless they correspond to the same number of duplicate colours in the hidden code. For example, if the hidden code is white-white-black-black and the player guesses white-white-white-black, the codemaker will award two colored key pegs for the two correct whites, nothing for the third white as there is not a third white in the code, and a colored key peg for the black. No indication is given of the fact that the code also includes a second black

### Master Mind - my version:
My game is a game for one player - the codebreaker, colors to recode are random colors - set up in the apllication at the beginning of the play. The player chooses 4 colors in every one of 10 following rows, and - after sending it - he gets a feedback - with white and black points. The white point means one correct color but not in the correct place, and the black point means one correct color in the correct place.
The player wins if he guesses the pattern in 10 (or less) steps.

## Technologies:
The application was created using React.

Other technologies used by me for this project: EcmaScript 2015, HTML5, CSS, Sass

## RWD
Page is fully responsive, there should be no troubles in accessing it on any device. Media queries in css changes page layout accordingly to the device viewport size.

## Installation
if you want to run/develop the code, you need to recreate the development environment based on package.json file - you need to install the components listed in there (by using npm install in bash console in project folder). To run the site you need to compile jsx files into out.js - it can be done in one of two ways:

- use dev-server - use command "npm run start" in bash console, it will start the server locally with preprocessed jsx and sass code.

- build the site - use command "npm run build" in bash console. The entire site will be built in build folder.

