// Object for the input
let input = {
    // key pressed actions
    keyDownHandler(e) {
        
        if (e.key == "Enter"){
            again = true;
            console.log('enter')
        }
        
        if (e.key == 32 || e.key == ' ' || e.detail > 0 ){
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
    // key (un)-pressed actions
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
    },
    //mouse move actions
    mouseMoveHandler(e) {
        console.log(window.screen.availWidth)
        let relativeX = (e.clientX - canvas.offsetLeft)*0.8;
            if(relativeX > 0 && relativeX < canvas.width) {
            // relativeX < spaceShip.x ? leftPressed = true : leftPressed = false;
            // relativeX > spaceShip.x ? rightPressed = true : rightPressed = false;
            spaceShip.x = relativeX-spaceShip.width;
        }
    }
}



// function 