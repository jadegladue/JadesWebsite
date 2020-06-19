let drawImage, imgWidth, imgHeight;
let colors = [];

function preload(){
    for (let i = 0; i < 11; i++){
        colors[i] = loadImage('img/color' + i + '.png');
    }
}


   

function setup(){
    let myCanvas = createCanvas(800,600);
    myCanvas.parent('myContainer');
    background(50);
    drawImage = colors[0];
    imgWidth = 50;
    imgHeight = 50;
    document.getElementById('sizeDimension').innerHTML = imgWidth + 'px';
    
}


function changeImage(value){
    drawImage = colors[value];
}

function mouseDragged(){
   image(drawImage, mouseX - (imgWidth/2), mouseY - (imgHeight/2), imgWidth, imgHeight);
}
function mouseClicked(){
    image(drawImage, mouseX - (imgWidth/2), mouseY - (imgHeight/2), imgWidth, imgHeight);
}

function changeSize(value){
    imgWidth += parseFloat(value);
    imgHeight += parseFloat(value);
    document.getElementById('sizeDimension').innerHTML = imgWidth + 'px';
   
}


function draw(){
    //image(flowers[0], 200, 200, 50, 10);
    //image(flowers[1], 600, 200, 50, 50);
    //image(flowers[2], 350, 400, 100, 100);

}