const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn__reset')[0];
const start = document.getElementsByClassName('start');
const overlay = document.getElementById('overlay');
const scoreboard = document.getElementsByClassName('tries');
const letter = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');
const phrases = [
  "release the murder hornets",
  "i want to go outside",
  "fun in the sun",
  "cat people",
  "i love tacos"
];

const resetGame = () =>{
  let missed = 0;
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
            //letter transition
            letter[i].style.transitionDuration = "3s";
            //add "show" class to the list item containing that letter
           letter[i].classList.add('show');
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
          //adds reset button to try again
          btnReset.textContent = "Try Again";
          missed = 0;
        }
      } else if(missed >= 5) {
          overlay.classList.add('lose');
          overlay.firstElementChild.textContent = "You've lost";
          overlay.style.display = "flex";
          //adds reset button to try again
          btnReset.textContent = "Try Again";
          missed = 0;
        }
    }


    //listen for the onscreen keyboard to be clicked
    qwerty.addEventListener('click', e => {
      //let buttons = event.target;
      if(e.target.tagName === 'BUTTON'){
        //use event delegation to listen only to buttons on the keyboard
        const buttons = e.target;
        //add the "chosen" class to the button so the same letter can't be used twice
        let chosen = buttons.classList.add('chosen');
         //set attribute to "disabled"
        buttons.disabled = true;
        //pass the button to the checkletter function
        let myLetter = checkLetter(buttons);
            //var letterFound = returned letter;
            if(myLetter === null){
              //add one to the missed counter
              missed += 1;
              //get the heart scorboard array and change image
              let heart = scoreboard[missed-1].lastElementChild;
              heart.src = "images/lostHeart.png";
            }
      }
      //call checkWin function
      checkWin();
    });
}

//attach an event listener to the start game button_reset
btnReset.addEventListener('click', () => {
  if (btnReset.textContent === 'Try Again'){
    overlay.classList.remove("win");
    overlay.classList.remove("lose");
    //reset scoreboard
    for (i=0; i < scoreboard.length; i+=1){
      let newBoard = scoreboard[i].lastElementChild;
      newBoard.src = "images/liveHeart.png";
    }
    //reset keyboard
    let removeChosen = qwerty.getElementsByTagName('BUTTON');
    for (i=0; i < removeChosen.length; i+=1){
      if(removeChosen[i].className === "chosen") {
        removeChosen[i].disabled = false;
        removeChosen[i].classList.remove("chosen");
      }
    }
    //reset phrase
    const oldPhrase = phrase.firstElementChild;
    let oldArray = oldPhrase.children;
      for (i=0; i < oldArray.length; i = 0){
        let child = oldArray[i];
        oldPhrase.removeChild(child);
      }
  }
  //make overlay dissapear
  overlay.style.display = 'none';
  resetGame();
  missed = 0;
});
