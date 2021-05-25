//Class of the player, instance will be created only once

class Ship  {
    constructor(x,y, width=30, height=60, lives=3, syringe=5){
        this.x = x/2;
        this.y = y -95;
        this.width = width;
        this.height = height;
        this.lives = lives;
        this.syringe = syringe;
    }
    show() {
        ctx.drawImage(mario, this.x, this.y, this.width, this.height); //player image
    }

    //moving of player is defined here
    move() {
        if(rightPressed) {
            this.x += 3; //speed of the player moving
            //check if the canvas borders are reached
            if (this.x + this.width > canvas.width){
            this.x = canvas.width - this.width;
            }
        }
        else if(leftPressed) {
            this.x -= 3;
            if (this.x < 0){
                this.x = 0;
            }
        }
    }
}