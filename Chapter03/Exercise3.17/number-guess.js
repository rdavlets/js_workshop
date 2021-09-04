let resultMsgEle = document.getElementById('results-msg');
let matchedMsgEle = document.getElementById('match-msg');
let noMatchMsgEle = document.getElementById('no-match-msg');
let numberToGuessEle = document.getElementById('number-to-guess');
let guessInputEle = document.getElementById('number-guessed');
// let testButtonEle = document.getElementById('test-button');

let testButtonEle = document.getElementById('test-button');
testButtonEle.addEventListener('click', testMatch);

function testMatch(e) {
    // console.log('Clicked!');
    matchedMsgEle.style.display = 'none';
    noMatchMsgEle.style.display = 'none';
    resultMsgEle.style.display = 'none';
    let numberGuessed = parseInt(guessInputEle.value);
    if (!isNaN(numberGuessed) && numberGuessed > 0 && numberGuessed <= 10) {
        resultMsgEle.style.display = 'block';
        let numberToGuess = Math.floor(Math.random() * 10 + 1);
        if (numberGuessed == numberToGuess) {
            matchedMsgEle.style.display = 'inline';
        } else {
            noMatchMsgEle.style.display = 'inline';
        }
        numberToGuessEle.innerText = numberToGuess;
    }
}