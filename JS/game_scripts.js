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
  //randomly choose phrase from phrases create var to store random number based on length of phrases
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
const array = getRandomPhraseAsArray(phrases);

//adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    const ul = phrase.firstElementChild;
    //loops through array of characters
    for(i=0; i < array.length; i+=1){
      //inside loop for [i]"each char in the array",
      //create item list <li> = each char for items in array
    //  if (i < array.length){
        //creates li element every itteration
          const listChar = document.createElement('li');
          //stores the iterated array value into the li element
          listChar.textContent = array[i];
          //appends the element to the unordered list
          ul.appendChild(listChar);
            //checks if the li value has a space or letter
            if(listChar.innerHTML !== " " ) {
              //sets the class "letter" to the elements with letters
              listChar.classList.add('letter');
            } else {
              listChar.classList.add('space');
            }
      //} else {
        //breaks out of the loop after every array value has been iterated
      //  break;
      //}
    }
 }

//call the function to create the list items
addPhraseToDisplay(array);

const checkLetter = button => {
  const letter = document.getElementsByClassName('letter');
  const show = document.getElementsByClassName('show');

    //loop over the letter li's
  for (i=0; i<letter.length; i++) {
        //check if match letter in the button player has chosen
        if (letter[i].textContent === button.textContent){
            //add "show" class to the list item containing that letter
            const show = letter[i].classList.add('show');
            //store letter inside Variable
            //let myLetter = button.textContent;

            //return letter Varaiable
          //  return letterFound;
         } else {

          }
        }
     }

//check if the game has been won or lost
//const checkWin = () => {


//}

//attach an event listener to the start game button_reset
btnReset.addEventListener('click', () => {
  //make overlay dissapear
  overlay.style.display = 'none';
});

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

    //use event delegation to listen only to buttons on the keyboard
    let button = event.target; //this still selects any button;
    //add the "chosen" class to the button so the same letter can't be used twice
    let chosen = button.classList.add('chosen'); //set attribute to "disabled"
    //pass the button to the checkletter function
    let myLetter = checkLetter(button);
    //var letterFound = returned letter;
    console.log(myLetter);
      if(myLetter === null){
          //remove heart here
          //add one to the missed counter
          missed += 1;
          console.log(missed);
      }
      //call checkWin function

});
