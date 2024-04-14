let hypotenuseA;
let firstPointaX;
let firstPointaY;


let secondPointaX;
let secondPointaY;


let thirdPointaX;
let thirdPointaY;

let fourthPointaX;
let fouthPointaY;

let aLength;

let hypotenuseB;
let firstPointbX;
let firstPointbY;


let secondPointbX;
let secondPointbY;


let bLength;

function setup() {
  createCanvas(1200, 1200);
  
  // rectangle a calculations
  
  hypotenuseA = random(100,200);
  let angleA = random(15, 80);
    
  // first and second points
    
    firstPointaX = 600-(round(abs((hypotenuseA*cos(angleA))), 2));
    firstPointaY = 300-(round(abs((hypotenuseA*sin(angleA))), 2));
   

    secondPointaX = 600-(round(abs(((100+hypotenuseA)*cos(angleA))), 2));
    secondPointaY = 300-(round(abs(((100+hypotenuseA)*sin(angleA))), 2));
    
   
  
    // third and fourth points
    aLength = random(200, 400);
    thirdPointaX = firstPointaX-abs((sin(angleA)*aLength))
    thirdPointaY = firstPointaY+abs((cos(angleA)*aLength))
  
    fourthPointaX = thirdPointaX-abs(100*cos(angleA));
    fourthPointaY = thirdPointaY-abs(100*sin(angleA));
  
  // rectangle b calculations
  
  hypotenuseB = random(100, 200);
    let angleB = random(15,80)
  
    // first and second points 
    
    firstPointbX = 600+(round(abs((hypotenuseB*cos(angleB))), 2));
    firstPointbY = 300-(round(abs((hypotenuseB*sin(angleB))), 2));

    secondPointbX = 600+(round(abs(((100+hypotenuseB)*cos(angleB))), 2));
    secondPointbY = 300-(round(abs(((100+hypotenuseB)*sin(angleB))), 2));
  
    // third and fourth points
    bLength = random(200, 400);
    thirdPointbX = firstPointbX+abs((sin(angleB)*bLength))
    thirdPointbY = firstPointbY+abs((cos(angleB)*bLength))
  
    fourthPointbX = thirdPointbX+abs(100*cos(angleB));
    fourthPointbY = thirdPointbY-abs(100*sin(angleB));
    
}

function draw() {
  background(220);

  stroke(3);
  
  // tester/non-cut lines:
  // line(firstPointaX, firstPointaY, secondPointaX, secondPointaY);
  // line(firstPointbX, firstPointbY, secondPointbX, secondPointbY);
  // line(firstPointaX, firstPointaY, thirdPointaX, thirdPointaY);
  // line(thirdPointaX, thirdPointaY, fourthPointaX, fourthPointaY);

  line(fourthPointaX, fourthPointaY, secondPointaX, secondPointaY)
  line(secondPointaX, secondPointaY, secondPointbX, secondPointbY)
  line(thirdPointaX, thirdPointaY, firstPointaX, firstPointaY)
  line(firstPointaX, firstPointaY, firstPointbX, firstPointbY)
  line(firstPointbX, firstPointbY, thirdPointbX, thirdPointbY)
  line(secondPointbX, secondPointbY, fourthPointbX, fourthPointbY)
  
  
  //REGISTRATION LINES
  stroke('orange');
  noFill();
  rect(100, 100, 1000, 1000);
  line(100, 300, 1100, 300);
  line(100, 900, 1100, 900);
  point(600,300)
}