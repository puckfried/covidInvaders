// Here the instances will be created (Mario, viruses and the status-bar)
function setup(){
    //create player figure (instance of Ship) 
    spaceShip = new Ship(canvas.width, canvas.height);
    //aliens created into array
    for (let i=0; i<10; i++ ){
        aliens[i] = new Alien(canvas.width/11*(i+1), 30);
    }
    //status bar created (instance of Status)
    status = new Status(score,spaceShip.lives);
    
    //Endgegner instance created
    endgegner = new Endgegner((canvas.width/2-100),-230);
    
    //2 intervall functions started, for later use
    setInterval(reloadVacc,2000); 
    setInterval(timerFunc,1000);


}

//This function contains the game, it will be repeated 60 times a second - using requestAnimationFrame() 
function draw(){
//Check if still alive
    if (spaceShip.lives > 0){
        
        ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the screen 
        status.show(); //show the status bar on the top
        spaceShip.show(); //show the player figure on screen
    
       //check if there are aliens existing (array not empty)
        if (aliens.length>0){
             //call the alien functions for each alien in array 
            for (let i=0; i<aliens.length; i++){
            aliens[i].show();
            aliens[i].move();
                //check if the canvas borders are reached and change directions
                if (aliens[i].x+aliens[i].width >= canvas.width || aliens[i].x <= 0) {
                    aliens.forEach(element => {
                        element.moving = element.moving*-1;
                        element.y +=15; 
                    });
                }

            }
    
            //Speed Up of the viruses after certain points
            if (level === 3 || level === 9 || level === 15){
                aliens.map(element => {
                element.moving *= 1.8
                })
                level++
                console.log('level added now:', level)
            }
            
            shooting(); //function coordinating the shooting from player
            answer(); //function coordinating the shooting from viruses
            spaceShip.move(); //moving from player is performed here
            requestAnimationFrame(draw); //reload the draw function from the beginning
        }

        //aliens array is empty
        else if (aliens.length===0) {
            // Endgegner still alive
            if (endgegner.hitten<25){
                endgegner.showEnd();
                endgegner.moveEnd()
                if (endgegner.x+endgegner.width >= canvas.width || endgegner.x <= 0) {
                        endgegner.moving = endgegner.moving*-1;
                }
                
                spaceShip.move()
                shooting('endgegner');
                answer('endgegner');
                endgegner.fight();
                requestAnimationFrame(draw);
            }
            // Endgegner done
            else {
                status.won();
                if (again=== true){
                    document.location.reload();
                }
              }
            
        }
    }

// If there are no lives left over    
    else {
    status.lost();
    requestAnimationFrame(draw);
    if (again=== true){
        document.location.reload();
    }

    }

}

// The function for the shooting of Mario
function shooting(enemy='alien'){
    //shooting array is looped through and every drop is displayed and moved
    for (let i=0; i<drops.length; i++) {
        if (drops[i].exist){
                drops[i].show()
                drops[i].move()
    
            //Different shooting for aliens and Endgegner
            if (enemy === 'alien') {
                for (let j=0; j<aliens.length; j++){
                    drops[i].hit(aliens[j]) //for every shot there is a demolition check (hit() method)
                    if (aliens[j].hitten == 3) {
                        aliens.splice(j,1) //Aliens get spliced out of the array if hitten 
                    }
                }
            }
            else if(enemy === 'endgegner') {
                drops[i].hit(endgegner); //demolition check with endgegner
            }

            drops[i].vanish(); //method to delete drops after hitting or leaving the canvas
    }
    }
}

//The function for the re-shooting of the viruses
function answer(enemy){
    for (let k=0; k<backfire.length; k++) {
        if (backfire[k].exist){
            backfire[k].show(enemy)
            backfire[k].move()
            backfire[k].hit(spaceShip);
            backfire[k].vanish();
            }
    }
}

//The function for the reloading of the injection up to 5 (will be called by setintervall() so it will work every second)
function reloadVacc(){
    if (spaceShip.syringe <5) {
        spaceShip.syringe += 1
        console.log('reloaded')
    }
}

// This function is is a counter that goes up to 5 (will be called by setIntervall() to have a simple time control)
function timerFunc() {
    timer < 5 ? timer++ : timer = 0
}