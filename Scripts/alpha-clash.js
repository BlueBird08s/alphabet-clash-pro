/* function play(){
    const homeSection = document.getElementById('home-screen');
    // console.log(homeScreen.classList);
    // you'll get the names of the classes of this object.[] Array like object] 

    homeSection.classList.add('hidden');
    // it'll add a class name 'hidden' 

    const playgroundSection = document.getElementById('play-ground'); 
    playgroundSection.classList.remove('hideen');
} */

// Another way ----->>>> 


// Capture keyboard key press 

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // stop game part 
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabateElement = document.getElementById('current-alphabate');
    const currentAlphabate = currentAlphabateElement.innerText;
    expectedAlphabate = currentAlphabate.toLowerCase();

    // check part 

    if(playerPressed === expectedAlphabate){
        console.log('You get a point');
        removeBackgroundColorById(expectedAlphabate);
        // update the score now :

        const currentScoreElement = document.getElementById('current-element');

        const currentScoreText = currentScoreElement.innerText;

        const currentScore = parseInt(currentScoreText); 
        // it'll convert it into number 

        // Now increase 
        const newScore = currentScore + 1;
        
        // show update 
        currentScoreElement.innerText = newScore; 

        // start a new round 
        continueGame();
    }
    else{
        console.log('You missed');
        // Current life 
        const currentLifeElement = document.getElementById('current-life');

        const currentLifeText = currentLifeElement.innerText;
        
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife + 1;

        const currentLifeElement.innerText = newLife;

        if(newLife === 0){

        }
    }
}


document.addEventListener('keyup', );

function continueGame(){
    // Generate a random alphabate. 
    const alphabate = getARandomAlphabate();

    // ste random alphabate in UI 

    const currentAlphabateElement = document.getElementById('current-alphabate');

    const currentAlphabateElement.innerText = alphabate;

}

// set background color

 setBackgroundColorById(alphabate);

function play(){
    // hide everything except play-ground 
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset all 
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score ---->>>
    const lastScore = getTextElementById('current-score');

    getTextElementValueById('last-score',lastScore);

    // clear last selected alphabate ---->>

    const currentAlphabate = getElementTextById('current-alphabate');
    removeBackgroundColorById(currentAlphabate);
    continueGame();
}


// Doing the current life part in another way --->>>






 