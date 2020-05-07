const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn__reset')[0];
const start = document.getElementsByClassName('start');
const overlay = document.getElementById('overlay');
const scoreboard = document.getElementsByClassName('tries');
const letter = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');
let missed = 0;
const phrases = [
  "release the murder hornets",
  "i want to go outside",
  "fun in the sun",
  "cat people",
  "i love tacos"
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

  let letterFound = null;
    //loop over the letter li's
  for (i=0; i<letter.length; i++) {
        //check if match letter in the button player has chosen
        if (letter[i].textContent === button.textContent){
           //letter[i].style.backgroundColor = "yellow";
           letter[i].style.transitionDuration = "4s";
            //add "show" class to the list item containing that letter
             letter[i].classList.add('show');
            //store letter inside Variable const show =
              //return letter Varaiable
            letterFound = button.textContent;
        }
        }
        //  return letterFound;
        return letterFound;
     }

//check if the game has been won or lost
const checkWin = () => {
  if(letter.length === show.length){
    if (missed <= 4) {
      overlay.classList.add('win');
      overlay.firstElementChild.textContent = "You've won!";
      overlay.style.display = "flex";
      btnReset.textContent = "Try Again";
    //document.getElementsByClassName('win').style.display = 'block';
  }
}
  else if(missed >= 5) {
    overlay.classList.add('lose');
    overlay.firstElementChild.textContent = "You've lost";
    overlay.style.display = "flex";
    btnReset.textContent = "Try Again";
    //document.getElementsByClassName('win').style.display = 'block';
  }
//()

}

//attach an event listener to the start game button_reset
btnReset.addEventListener('click', () => {
  if (btnReset.textContent === "Try Again") {
    overlay.style.display = 'none';
    location.reload();

  }
  //make overlay dissapear
  overlay.style.display = 'none';

});

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

    //use event delegation to listen only to buttons on the keyboard
    //let buttons = event.target;
     if(e.target.tagName === 'BUTTON'){
       const buttons = e.target;
       //this target other things too (need to specify button)
      //add the "chosen" class to the button so the same letter can't be used twice
      let chosen = buttons.classList.add('chosen');
       //set attribute to "disabled"
       buttons.disabled = true;
      //pass the button to the checkletter function
      let myLetter = checkLetter(buttons);
      //var letterFound = returned letter;
        if(myLetter === null){
            //remove heart here. create variable of the heart. replace the innerhtml of that thing to lostheart.png
            //add one to the missed counter
            missed += 1;
            //missed is going to be the array # + 1 of the item in the heart scoreboard
            //get the heart scorboard array and console it
            let heart = scoreboard[missed-1].lastElementChild;
            heart.src = "images/lostheart.png";
        }
     }
      //call checkWin function
      checkWin();

});
