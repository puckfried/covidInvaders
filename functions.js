// Here the instances will be created (Mario, viruses and the status-bar)
function setup(){
    spaceShip = new Ship(canvas.width, canvas.height);
    for (let i=0; i<10; i++ ){
        aliens[i] = new Alien(canvas.width/11*(i+1), 30);
    }

    status = new Status(score,spaceShip.lives);
    endgegner = new Endgegner((canvas.width/2-100),-230);
    setInterval(reloadVacc,2000);
    setInterval(timerFunc,1000);


}

//This function contains the game, it will be repeated 60 times a second - using requestAnimationFrame() 
function draw(){
//Check if still alive
    if (spaceShip.lives > 0){
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        status.show();
        spaceShip.show();
    
        if (aliens.length>0){
            for (let i=0; i<aliens.length; i++){
            aliens[i].show();
            aliens[i].move();
                if (aliens[i].x+aliens[i].width >= canvas.width || aliens[i].x <= 0) {
                    aliens.forEach(element => {
                        element.moving = element.moving*-1;
                        element.y +=15; 
                    });
                }

            }
    
            //Speed Up of the viruses
            if (level === 3 || level === 9 || level === 15){
            console.log('Speed up!!')
            aliens.map(element => {
                element.moving *= 1.8
            })
            level++
            console.log('level added now:', level)
            }
            shooting()
            answer();
            spaceShip.move()
            requestAnimationFrame(draw);
        }

        else if (aliens.length===0) {
            // Endgegner
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
            else {
                console.log(endgegner)
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
    for (let i=0; i<drops.length; i++) {
        if (drops[i].exist){
                drops[i].show()
                drops[i].move()
       
            if (enemy === 'alien') {
                for (let j=0; j<aliens.length; j++){
                    drops[i].hit(aliens[j])
                    if (aliens[j].hitten == 3) {
                        aliens.splice(j,1)
                    }
            }
            }
            else if(enemy === 'endgegner') {
                drops[i].hit(endgegner);
                
            }

        drops[i].vanish();
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