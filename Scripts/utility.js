function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-orange-400');
}

function getARandomAlphabate(){
    // get or create a alphabate

    const alphabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabateString.split('');
    // itll split like ['a','b'];

    // Generate a random alphabate. 

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // Gives index number between 0-25;
    
    const alphabate = alphabates[index];
    return alphabate;
    // Gives alphabate between a-z;

}

// score increase --->>>

 function getTextElementById (elementId){
    const element = document.getElementById(elementId);
    const elementIdValueText = element.innerText;
    const value = parseInt(elementIdValueText);

    return value; 
} 

function setElementTextById(elementId){
    const element = document.getElementById(elementId);

    const text = element.innerText;
    return text;
}


function setTextElementValueById(elementId, value){
    const element= document.getElementById(elementId);
    element.innerText = value;
}  