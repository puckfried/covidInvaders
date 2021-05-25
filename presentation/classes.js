class Figure  {
    constructor(x,y, width=30, height=60){
        this.x = x;
        this.y = y ;
        this.width = width;
        this.height = height;

    }
    show() {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.closePath();

    }
    
    move() {
        if(rightPressed) {
            this.x += 3;
        }

        else if(leftPressed) {
            this.x -= 3;
        }
    }
}



class Alien {
    constructor(x,y,width=40,height=40,hitten=0, color='blue', moving=0.25) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color
        this.moving = moving;
    }

    show() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.closePath();

    }


    move() {
        
        this.x += this.moving;
        }


}