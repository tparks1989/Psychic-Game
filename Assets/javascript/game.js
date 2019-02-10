var letters = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];
        var Wins = 0;
        var Losses = 0;
        var guessesLeft = 9;
        var pressedLetter = pressedLetter;
        var mainArray = [];
        var randomLetter = randomLetter;

        pressedLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(pressedLetter);

        function jsGuess() {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            console.log(randomLetter);
        }

        document.onkeyup = function (event) {
            var pressedLetter = event.key;

            if (pressedLetter !== randomLetter) {
                guessesLeft--;
            }

            if (pressedLetter === randomLetter) {
                Wins++;
                guessesLeft = 9;
                mainArray = [];
            }

            if (guessesLeft == 0) {
                Losses++;
                mainArray = [];
                guessesLeft = 9;
            }

            if(mainArray.indexOf(pressedLetter) >= 0) {

            } else {
                mainArray.push(pressedLetter);
                document.getElementById('pressedLetter').innerHTML = mainArray;
                console.log(mainArray);
            }

            document.getElementById('Wins').innerHTML = Wins;
            document.getElementById('Losses').innerHTML = Losses;
            document.getElementById('guessesLeft').innerHTML = guessesLeft;

        }