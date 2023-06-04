import {loadOnMouseOver , unloadOnMouseLeave} from "./interactivity.js";

class CardSet {

     prevCard = undefined;
     nextCard = undefined;
     currentCard = undefined;
     cardArr = undefined;
     cardSetLength = undefined;
     constructor(){
        this.cardArr = document.getElementsByClassName('cards');
        console.log(this.cardArr);
        this.prevCard = -1;
        this.currentCard = 0;
        this.nextCard = 1;
        this.cardSetLength = this.cardArr.length -1;
        this.initialDisplay();
    }

    initialDisplay(){
        Array.from(this.cardArr).forEach((eachCard)=>{
            eachCard.classList.add("hidden-cards");
        })

        this.cardArr[this.currentCard].classList.replace('hidden-cards','current-card');
        this.cardArr[this.nextCard].classList.replace('hidden-cards','next-card');
        this.bindEvents();
    }

    showPrev(){
        if(this.prevCard >=0){
            this.addRightSlideAnimation();
            this.hideCards();
            if(this.prevCard === 0){
                this.prevCard = this.cardSetLength + 1;
            }
            if(this.currentCard === 0){
                this.currentCard = this.cardSetLength + 1;
            }
            if(this.nextCard === 0){
                this.nextCard = this.cardSetLength + 1;
            }
            this.prevCard--;
            this.currentCard--;
            this.nextCard--;
            this.renderCards();            
        }
    }

     showNext(){        
        this.addLeftSlideAnimation();

        this.hideCards();
        if(this.nextCard === this.cardSetLength){
            this.nextCard = -1;
        }
        if(this.currentCard === this.cardSetLength){
            this.currentCard = -1;
        }
        if(this.prevCard === this.cardSetLength){
            this.prevCard = -1;
        }
        this.prevCard++;
        this.currentCard++;
        this.nextCard++;
        this.renderCards();        
    }

    renderCards(){        
        this.cardArr[this.prevCard].classList.replace('hidden-cards','prev-card');
        this.cardArr[this.currentCard].classList.replace('hidden-cards','current-card');
        this.cardArr[this.nextCard].classList.replace('hidden-cards','next-card');            
        this.bindEvents();
    }

    hideCards(){
        if(this.prevCard >= 0){
            this.cardArr[this.prevCard].classList.replace('prev-card','hidden-cards');
        }
        this.cardArr[this.currentCard].classList.replace('current-card','hidden-cards');
        this.cardArr[this.nextCard].classList.replace('next-card','hidden-cards');              
        this.removeEvents();
    }

    bindEvents(){      
        this.cardArr[this.currentCard].lastElementChild.onmouseover = loadOnMouseOver
        this.cardArr[this.currentCard].lastElementChild.onmouseleave = unloadOnMouseLeave                
    }

    removeEvents(){    
        this.cardArr[this.currentCard].lastElementChild.onmouseover = null;
        this.cardArr[this.currentCard].lastElementChild.onmouseleave = null;    
    }

    addLeftSlideAnimation(){        
        if(this.cardArr[this.nextCard].classList.contains('slide-current-card-left-animation')){            
            this.cardArr[this.nextCard].classList.remove('slide-current-card-left-animation'); 
        }
        if(this.cardArr[this.nextCard].classList.contains('slide-current-card-right-animation')){            
            this.cardArr[this.nextCard].classList.remove('slide-current-card-right-animation'); 
        }        
        this.cardArr[this.currentCard].classList.add('slide-current-card-left-animation');        
    }

    addRightSlideAnimation(){            
            if(this.cardArr[this.prevCard].classList.contains('slide-current-card-right-animation')){                
                this.cardArr[this.prevCard].classList.remove('slide-current-card-right-animation'); 
            }

            if(this.cardArr[this.prevCard].classList.contains('slide-current-card-left-animation')){
                this.cardArr[this.prevCard].classList.remove('slide-current-card-left-animation')
            }
            
            this.cardArr[this.currentCard].classList.add('slide-current-card-right-animation');                    
    }
}

const cardSetObj = new CardSet()

const prevButton = document.getElementById("button-prev").addEventListener( "click" , cardSetObj.showPrev.bind(cardSetObj))
const nextButton = document.getElementById("button-next").addEventListener( "click" , cardSetObj.showNext.bind(cardSetObj))

export default cardSetObj 