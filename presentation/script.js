//creating the canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


//variables for instances
let aliens = [];
let player;

//variables for the moving
let rightPressed = false;
let leftPressed = false;

// Object for the key input
let input = {
    keyDownHandler(e) {
     
        if(e.key == "Right" || e.key == "ArrowRight") {
           console.log('right ressed');
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
           leftPressed = true;
        
        }
    },
    
    keyUpHandler(e) {
        
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }
}

//function for creating the instances
function setup(){
    //player variables
    player = new Figure(canvas.width/2, canvas.height-100);
    
    //10 aliens created and filled into the empty array
    for (let i=0; i<10; i++ ){
        aliens[i] = new Alien(canvas.width/12*(i+1), 30);
    }
  
}


//This function contains the game, it will be repeated 60 times a second - using requestAnimationFrame() 
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //empty the screen everytime
    

    // methods from player called (draw the rectangle & move it, if the keys are used)
    player.show(); 
    player.move();
    

    //methods from aliens - but it is an array, so we have to loop through every element 
    for (let i=0; i<aliens.length; i++){
        aliens[i].show();
        aliens[i].move();

            // you have to check if they reach the canvas borders and change the direction
            if (aliens[i].x+aliens[i].width >= canvas.width || aliens[i].x <= 0) {
                aliens.forEach(element => {
                    element.moving = element.moving*-1;
                    element.y +=15; 
                });
            }

        }
    
    //function calls themself again and starts from the beginning (happens 60 times a second)    
    requestAnimationFrame(draw);    

}


//calling the functions for starting the game
setup();
draw();

//event listener for checking the inputs
document.addEventListener("keydown", input.keyDownHandler, false);
document.addEventListener("keyup", input.keyUpHandler, false);