const phraseBank = [
    "60% of the time it works everytime",
    "I love lamp",
    "I'm in a glass case of emotion",
    "It's so hot. Milk was a bad choice",
    "By the beard of Zeus!",
    "It is anchorman, not anchorlady! And that is a fact!",
    "Brick killed a guy",
    "LOUD NOISES",
    "I DON'T KNOW WHAT WE'RE YELLING ABOUT",
    "I ate a big red candle",
    "Hey, where'd you get those clothes, the toilet store?"
]

function generateRandomNumber(num) {
    return Math.round(Math.random() * num);
};

function generateRandomPhrase() {
    let a = generateRandomNumber(phraseBank.length);
    return phraseBank[a];
};

function generateMultiplePhrases() {
    let phrase1 = generateRandomPhrase();
    let phrase2 = generateRandomPhrase();
    let phrase3 = generateRandomPhrase();

    if(phrase1 === phrase2){
        phrase1 = generateRandomPhrase()
    };
    if(phrase1 === phrase3){
        phrase1 = generateRandomPhrase()
    };
    if(phrase2 === phrase3){
        phrase2 = generateRandomPhrase()
    }
    return phrase1 + " | " + phrase2 + " | " + phrase3;
};

console.log(generateMultiplePhrases());