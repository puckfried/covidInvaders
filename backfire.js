//This is the class for the re-Shooting of the viruses, instances will be created with every hit

class Backfire {
    constructor(x,y,style=Math.ceil(Math.random()*10)) {
        this.x = x;
        this.y = y;
        this.width = 15;
        this.height = 15;
        this.exist = true;
        this.direction = 0;
        this.style = style // a random number between 0-10 to create a 10% chance for getting an extra live
    }
    //displaying the instances, as long as alien array is not empty, there is a 10% chance for different style (extra live)
    show(enemy='alien') {
       if (this.style !=9){
         if (enemy === 'alien'){
                ctx.drawImage(virus3, this.x, this.y, this.width, this.height); //normal virus shots
                }
         else if(enemy === 'endgegner'){
            ctx.drawImage(virus, this.x, this.y, this.width+5, this.height+5); //Endgegner shots look a bit different
            }
        }
        else {
            ctx.drawImage(heart, this.x, this.y, this.width, this.height); //extra live style
        }
  
        

    }
    // the basic moving
    move() {
        this.y = this.y+3;
        this.x= this.x+this.direction
    }
    // the deomlition control with the player
    hit(ship) {
        if (this.x > ship.x && this.x <(ship.x+ship.width) && this.y >= (ship.y)) {
            this.exist = false; // the drop gets deleted
            this.style !=9 ? ship.lives -= 1 : ship.lives++; //when hitten reduce live (or add it when extra live item)
            }
    }
    //delete it when leaving the canvas
    vanish(){
        if (this.y>canvas.height) {
            this.exist = false;
        }
    }


    
}