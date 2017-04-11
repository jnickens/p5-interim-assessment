var x = 40;
var colorred = 255;
var colorgreen = 0;
var colorblue = 250;


var habits = ["Be kind", "Be Humble", "Be Patient", "Stay Lit"];


function setup(){
    createCanvas(600,400);
    background(255, 212, 0);
}

function draw(){
     if(mouseIsPressed){circle();}
     
     
     for(var x = 0; x <=600; x = x + 50){
         stroke(0);
         strokeWeight(5);
         ellipse(x,200,20,20)
        
         }
}


   function circle(){
     stroke(0);
     strokeWeight(5);
     fill(colorblue,colorgreen, colorred,25);
     ellipse(mouseX,mouseY,40,40);
     colorblue = random(0,255);
     colorgreen = random(0,255);
     colorred = random(0,255);
}




