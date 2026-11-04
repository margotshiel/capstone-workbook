// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }

function setup() {
    let cnv=createCanvas(windowWidth, windowHeight);
    // canvas.position(0,0);
    cnv.style('z-index', '-1');
    frameRate(35);
    // background(255, 255, 255);
    cnv.parent('p5-canvas-container');
     drawingContext.setLineDash([4, 8]);
}

function draw(){
    // background(255, 255, 255, 4);
    line(mouseX, mouseY, pmouseX, pmouseY);
    // line(width/2, height/2, mouseX, mouseY);
    stroke(0, 0, 0);
    strokeWeight(3);
    
}