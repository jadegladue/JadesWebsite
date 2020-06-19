var Engine = Matter.Engine,
 //   Render = Matter.render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine, world;

let circles = [];

let boundaries = [];

let ground = [];

function setup(){
    let myCanvas = createCanvas(800,600);
    myCanvas.parent('myContainer');
   engine = Engine.create();
    world = engine.world;
    //boundaries.push(new Boundary(0, 450, width*2, 10, 0.1));
    boundaries.push(new Boundary(450, 100, width/4, 5, -0.05));
    boundaries.push(new Boundary(400, 275, width/2, 5, 0.1));
    boundaries.push(new Boundary(200, 375, width/3, 5, -0.02));
    boundaries.push(new Boundary(450/2, 50, width/5 - 20, 5, -0.5));
    boundaries.push(new Boundary(700, 100, width/5 - 20, 5, -0.5));
    boundaries.push(new Boundary(700, 500, width/5 - 20, 5, -0.001));
    boundaries.push(new Boundary(400, 575, width/5 - 20, 5, -0.001));
    boundaries.push(new Boundary(526, 475, width/6 - 20, 5, -0.001));
    boundaries.push(new Boundary(50, 500, width/2 - 20, 5, -2));
    boundaries.push(new Boundary(50, 100, width/6 - 20, 5, 1.25));
}
class circle{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        let options = {
            friction: 0,
            restitution: 0.95
        }
        this.body = Bodies.circle(x,y,r, options);
        World.add(world, this.body);
    }
    show(){
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
         fill(random(10, 255), random(100, 200), random(10, 200), random(50, 75), 95);
        ellipse(0, 0, this.r*2);
        pop();
    }

}

class Boundary {
    constructor(x, y, w, h, a){
        this.w = w;
        this.h = h;
        let options = {
            friction: 20,
            restitution: 0.95,
            angle: a,
            isStatic: true
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    show(){
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke()
        fill(0);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
function mouseDragged(){
    circles.push(new circle(mouseX, mouseY, random(5, 25)));
}

function draw(){
    background(50);
    Engine.update(engine);
    for (let i = 0; i < circles.length; i++){
        circles[i].show();
    }
     for (let i = 0; i < boundaries.length; i++){
        boundaries[i].show();
    }
}