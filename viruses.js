class Alien {
    constructor(x,y,width=40,height=40,hitten=0, color='pink', moving=0.25) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hitten = hitten;
        this.color = color
        this.moving = moving;
    }

    show() {
            // ctx.beginPath();
            // ctx.rect(this.x, this.y, this.width, this.height);
            // ctx.fillStyle = this.color;
            // ctx.fill();
            // ctx.closePath();
            ctx.drawImage(virus, this.x, this.y, this.width, this.height);

    }


    move() {
        
        this.x += this.moving;
        if (this.y >= (spaceShip.y-spaceShip.height)) {
            spaceShip.lives = 0
        }
    }


}


class Endgegner extends Alien {
    constructor(x,y,width=240,height=240,hitten=0,color,moving=0.8  ) {
        super(x,y,width,height,hitten,color,moving)
    }

    showEnd() {
              ctx.drawImage(virus2, this.x, this.y, this.width, this.height);
    }

    moveEnd() {
        if (this.y <= 30) 
            {this.y += this.moving}
        else {
            this.x += this.moving
        }
        switch (this.hitten) {
            case 5 :
                this.hitten++;
                this.moving = 1.3;
                this.y += 10;
                break;
            case 10:
                this.hitten++
                 this.moving = 2;  
                this.y += 2;
                 break;  
            case 20:
                this.hitten++
                this.moving = 3;  
                this.y += 2;
                break;
            }
    }

    fight() {
        if (timer === 4) {
            this.hitten <= 10 ? timer=0 : timer =2;
            let shoot = new Backfire(this.x+spaceShip.width/2,this.y+240,0);
            shoot.direction = (spaceShip.x-this.x)/44
            backfire.push(shoot);

        }
    }
}
