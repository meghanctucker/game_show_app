const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn__reset')[0];
const start = document.getElementsByClassName('start');
const overlay = document.getElementById('overlay');
let missed = 0;
const phrases = [
  "roses are red",
  "violets are blue",
  "it dont always be that way",
  "but sometimes it do",
  "this is a phrase"
];


//return a random phrase from an array
const getRandomPhraseAsArray = arr => {
  //randomly choose phrase from phrases
  //create var to store random number based on length of phrases
  //use variable to select index inside of the arry
  let randPhrase = phrases[Math.floor(Math.random()*phrases.length)];
  //call this
//split into new array of characters
  let phraseChar = randPhrase.split('');
  return phraseChar;
  //return new character array
  //array should be a parameter
}
//to use this function you'll pass in the phrases array as an argument when you call the function.
//example: getRandomPhraseAsArray(phrase);
console.log(getRandomPhraseAsArray(phrases));

//adds the letters of a string to the display
//const addPhraseToDisplay = arr => {
  //loops through array of characters
//  for(i = 0; arr.length; i+= 1) {
    //inside loop for [i]"each char in the array",
    //create item list <li> = each char for items in array
    //append list to #phrase <ul> in html
        //if (<li> char is not equal to a space){
            //add class "letter" to item
      //} else {
          //no class added
    //}
//  }
//}

//check if a letter is in the phrase
//const checkLetter = button => {

//}

//check if the game has been won or lost
//const checkWin = () => {

//}

//attach an event listener to the start game button_reset
btnReset.addEventListener('click', () => {
  //make overlay dissapear
  overlay.style.display = 'none';
});

//listen for the onscreen keyboard to be clicked
//qwerty.addEventListener('click', e => {

//});
