function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedSentence = "";

    for (let i = 0; i < words.length; i++) {
        let reversedWord = "";
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }
        reversedSentence += reversedWord + (i < words.length - 1 ? " " : "");
    }

    return reversedSentence;
}
let sentence = "This is a sunny day";
let result = reverseWords(sentence);
console.log(result);
