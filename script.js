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

// creating global variables for the instances (Mario, Viruses, Firing, status bar)
let spaceship;
let aliens = [];
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




//calling the functions for starting the game
setup();
draw();


//event listener for checking the inputs
document.addEventListener("keydown", input.keyDownHandler, false);
document.addEventListener("keyup", input.keyUpHandler, false);
document.addEventListener("mousemove", input.mouseMoveHandler, false);
document.addEventListener('click', input.keyDownHandler, false)