let bubbles = [];

function setup(){
    let myCanvas = createCanvas(800,600);
    myCanvas.parent('myContainer');
}

function mousePressed(){
 let r = random(20,100); 
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
    console.log(bubbles);
}

function draw(){
    background(50);
    for(let i = 0; i < bubbles.length; i++){
        bubbles[i].show();
        bubbles[i].move();
        //bubbles[i].bounce();
    }

    
}

class Bubble {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    move(){
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-5,5);
        
    }
//    bounce(){
//    if( x >= width){
//        this.x = this.x + -10;
//    } 
//   if( x >= 0){
//        this.x = this.x + 10;
//    }
//    }
   
           
    
    
    show(){
      stroke(random(100, 255));
        strokeWeight(random(1, 10));
        fill(random(10, 255), random(10, 255), random(10, 255), random(10, 75));
        ellipse(this.x, this.y, this.r *2);
          rect(this.x+2, this.y-5, this.r/2, this.r/3, this.r *2);
      // ellipse(this.x-60+this.r, this.y+5+this.r, 20, 40, this.r *2);
      //  ellipse(this.x/this.r, this.y-this.r, 20, 40, this.r *2);
      // ellipse(this.x-60+this.r, this.y+5, 20, 40, this.r *2);
       // ellipse(this.x, this.y-2, 20, 40, this.r *2);
        ellipse(this.x+this.r, this.y-5, this.r/4, this.r/4, this.r *2);
         ellipse(this.x-this.r, this.y-5, this.r/4, this.r/4, this.r *2);
    }
    
    
}