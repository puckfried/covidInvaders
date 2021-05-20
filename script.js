//creating the canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//load the images from html
let mario = document.getElementById("mario");
let marioScore = document.getElementById('marioScore');
let virus = document.getElementById('virus');
let virus2 = document.getElementById('virus2');
let virus3 = document.getElementById('virus3');
let vacc = document.getElementById('vacc');
let heart = document.getElementById('heart');

// creating variables for the instances (Mario, Viruses, Firing, status bar)
let spaceship;
let aliens = []
let drops =[];
let backfire = [];
let endgegner;
let status;


//creating helping variables for collecting infos
let again = false;
let rightPressed = false;
let leftPressed = false;
let spaceBar = false;
let level = 0;
let score = 0;
let timer = 0;


// Object for the key input
let input = {
    keyDownHandler(e) {
        
        if (e.key == "Enter"){
            again = true;
            console.log('enter')
        }
        
        if (e.key == 32 || e.key == ' '){
            if (spaceShip.syringe >= 0){
                let drop = new Drops(spaceShip.x+14,(spaceShip.y)-5);
                drops.push(drop);
                spaceShip.syringe -=1
                }
            else {
                console.log('no ammu!!')
            }
         }

        if(e.key == "Right" || e.key == "ArrowRight") {
           rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
           leftPressed = true;
        
        }
    },
    
    keyUpHandler(e) {
        
        if (e.key == "Enter"){
            again = false;
        }
        
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }
}

//calling the functions for starting the game
setup();
draw();


//event listener for checking the inputs
document.addEventListener("keydown", input.keyDownHandler, false);
document.addEventListener("keyup", input.keyUpHandler, false);
