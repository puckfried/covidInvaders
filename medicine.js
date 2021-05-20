class Drops {
    constructor(x,y,width= 8,height=20) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.exist = true;
    }

    show() {
        ctx.drawImage(vacc, this.x, this.y, this.width, this.height);
    }

    move() {
        this.y = this.y-3;
    }

    hit(virus) {
        if (this.x> virus.x && this.x <virus.x+virus.width && this.y <= virus.y+virus.height) {
            virus.hitten += 1;
            score+=10  ;
            let fire = new Backfire(this.x,this.y);
            
            if (virus instanceof Endgegner) {
                fire.direction = (Math.ceil(Math.random()*10))-5; 
                fire.style = 0}
             else {
                fire.direction = 0;
             }   
             
             backfire.push(fire);
                if (virus.hitten ===1){
                    virus.width -=3;
                    level += 1;    
                }
                else if (virus.hitten ===2) {
                    virus.width -=3;
                    level += 1;
            }
            this.exist = false;
        }
        }
    
    vanish(){
        if (this.y<0) {
            this.exist = false;
        }
    }


    
}