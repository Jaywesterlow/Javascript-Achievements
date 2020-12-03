"use strict"   
let myText = document.getElementById('myText');
let myImage = document.getElementById('myImage');
let myButton = document.getElementById('myButton');
let myReset = document.getElementById('myReset');

myButton.addEventListener('click', function(){
    main();
})

myReset.addEventListener('click', function(){
    /* hier komt jouw code */
})

function main(){
     let dezeTextWordtHet = makeThisSentence();
     myText.innerHTML = dezeTextWordtHet;
     sayItLoud(dezeTextWordtHet); // say something nice say it loud
     selectThisImage(); // show a nice image
}



function randomizer(range = 1){ 
    // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
    return Math.floor((Math.random() * range));
}


function makeThisSentence(){
    let index1 = randomizer(arrayLength);
    let index2 = randomizer(arrayLength);
    let index3 = randomizer(arrayLength);
    let woord1 = onderwerp[index1];
    let woord2 = werkwoord[index2];
    let woord3 = restwoord[index3];
    let outputString = woord1 + " " + woord2 + " " + woord3;
    return outputString;
}

function selectThisImage(){
    let index = randomizer(arrayLength);
    myImage.src = plaatjes[index]; 
}

function sayItLoud (textString) {
  let message = new SpeechSynthesisUtterance(textString);
  let voices = window.speechSynthesis.getVoices();
  message.voice = voices[1];
  message.pitch = 1; // range between 0 and 2
  message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
  window.speechSynthesis.speak(message);
}



const onderwerp = ["he", "Jaymar", "it"];
const werkwoord = ["talks", "eats", "jogs"];
const restwoord = ["at work", "at home", "at the gym"];
    
let plaatjes = ["https://media.self.com/photos/5f490e4e4a75ee30a626683e/master/pass/woman_food_donut.jpeg", "https://www.melos-gmbh.com/fileadmin/_processed_/7/0/csm_nl-jogging-track_e2d2b8fe3f.jpg", "https://www.universityofcalifornia.edu/sites/default/files/improve-talk-uc-san-diego.jpg"]
let arrayLength = onderwerp.length;