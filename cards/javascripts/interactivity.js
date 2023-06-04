import cardSetObj from "./functionality.js"
console.log("Interactivity is working")
function loadOnMouseOver(){          
    const cardFront = document.getElementsByClassName('card-front')[cardSetObj.currentCard]
    const cardBack =  document.getElementsByClassName('card-back')[cardSetObj.currentCard]
    cardFront.classList.add('card-front-load')
    cardBack.classList.add('card-back-load')
    cardFront.classList.remove('card-front-unload')
}

function unloadOnMouseLeave(){    
    const cardFront = document.getElementsByClassName('card-front')[cardSetObj.currentCard]
    const cardBack =  document.getElementsByClassName('card-back')[cardSetObj.currentCard]
    cardFront.classList.add('card-front-unload')
    cardFront.classList.remove('card-front-load')
    cardBack.classList.remove('card-back-load')
}


export  {loadOnMouseOver , unloadOnMouseLeave}