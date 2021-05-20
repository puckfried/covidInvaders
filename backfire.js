class Backfire {
    constructor(x,y,style=Math.ceil(Math.random()*10)) {
        this.x = x;
        this.y = y;
        this.width = 15;
        this.height = 15;
        this.exist = true;
        this.direction = 0;
        this.style = style // a random number between 0-10 
    }

    show(enemy='alien') {
       if (this.style !=9){
         if (enemy === 'alien'){
                ctx.drawImage(virus3, this.x, this.y, this.width, this.height);
                }
         else if(enemy === 'endgegner'){
            ctx.drawImage(virus, this.x, this.y, this.width+5, this.height+5);
            }
        }
        else {
            ctx.drawImage(heart, this.x, this.y, this.width, this.height); 
        }
  
        

    }

    move() {
        this.y = this.y+3;
        this.x= this.x+this.direction
    }

    hit(ship) {
        if (this.x > ship.x && this.x <(ship.x+ship.width) && this.y >= (ship.y)) {
            this.exist = false;
            this.style !=9 ? ship.lives -= 1 : ship.lives++;
            }
    }
    
    vanish(){
        if (this.y>canvas.height) {
            this.exist = false;
        }
    }


    
}