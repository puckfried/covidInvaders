class Status {

    // The status bar on the top
    show() {
        //the font setup
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "#0095DD";
        
        //the score
        ctx.fillText("Score: " +  score, 8, 25);
        
        //the live display
        ctx.drawImage(marioScore, canvas.width-100, 6, 25, 25);
        ctx.fillText(" x " + spaceShip.lives, canvas.width-70, 25);
        
        // The vaccine display
        ctx.drawImage(vacc, canvas.width-210, 9, 10, 20);
        ctx.fillText(" x " + spaceShip.syringe, canvas.width-200, 25);
        
        //The display of the "Endgegner" - only show when "Endgegner" appears
        if (aliens.length === 0) {
            ctx.fillStyle = "red";
            ctx.fillText(" Endgegner: ", 150,25);
            
            //empty square not filled
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.strokeRect(280, 15, 125, 10);
            ctx.closePath();

            // filled square expands when Endgegner is hitten
            ctx.beginPath();
            ctx.rect(280, 15, endgegner.hitten*5, 10);
            ctx.fillStyle = 'blue';
            ctx.fill();
            ctx.closePath();
        }
    }
    
    // The screen when game is lost
    lost(){
        ctx.font = "bold italic 46px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("GAME OVER!!", 250 , canvas.height/2);
        
        ctx.font = "bold italic 26px Arial"; 
        ctx.fillText("- press enter for replay -", 250 , 290);
        
    }

    // The screen when the game is won
    won() {
        ctx.font = "bold italic 46px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("YOU WON!!", 250 , canvas.height/2);
 
        ctx.font = "bold italic 26px Arial"; 
        ctx.fillText("- press enter for replay -", 250 , 290);
       
    }
}