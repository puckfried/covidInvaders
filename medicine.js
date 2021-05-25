// Class for the player shooting - instances will be created when space bar is hitten

class Drops {
    constructor(x,y,width= 8,height=20) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.exist = true;
    }

    show() {
        ctx.drawImage(vacc, this.x, this.y, this.width, this.height); //vaccine image
    }
    
    //basic moving
    move() {
        this.y = this.y-3;
    }

    //demolition control when hitting the viruses and creating the Backfire instances
    hit(virus) {
        if (this.x> virus.x && this.x <virus.x+virus.width && this.y <= virus.y+virus.height) {
            virus.hitten += 1;
            score+=10  ;
            let fire = new Backfire(this.x,this.y); //re-shooting of the virus, when hit - new Instance of Backfire is created safed in local variable fire 
            
            //Backfire direction from Endgegner is a random direction 
            if (virus instanceof Endgegner) {
                fire.direction = (Math.ceil(Math.random()*10))-5;
                fire.style = 0}
             else {
                fire.direction = 0;
             }   
             
             backfire.push(fire); //the local fire variable is pushed into global backfire array
                if (virus.hitten ===1){
                    virus.width -=3;
                    level += 1;    
                }
                else if (virus.hitten ===2) {
                    virus.width -=3;
                    level += 1;
            }
            this.exist = false; // the shot disappears after hitting
        }
        }
    
        //the shot disappears after leaving canvas (this produces a bug, mostly when the viruses are lower, they can get hitten from the "back")
    vanish(){
        if (this.y<0) {
            this.exist = false;
        }
    }


    
}