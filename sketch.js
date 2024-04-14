// this code generates sketches of frame looms with
// randomly generated characteristcs.
// when opposite pairs of holes are warped,
// overlaying threads create a diamond warp pattern,
// which can be woven to form an irregular-polygon shaped
// textile created by randomness

// RECTANGLE A GLOBAL VARIABLES
let hypotenuseA;
let aLength;

let firstPointaX;
let firstPointaY;

let secondPointaX;
let secondPointaY;

let thirdPointaX;
let thirdPointaY;

let fourthPointaX;
let fouthPointaY;


// RECTANGLE B GLOBAL VARIABLES
let hypotenuseB;
let bLength;


let firstPointbX;
let firstPointbY;


let secondPointbX;
let secondPointbY;


// RECTANGLE C GLOBAL VARIABLES
let hypotenuseC;
let cLength;

let firstPointcX;
let firstPointcY;

let secondPointcX;
let secondPointcY;

let thirdPointcX;
let thirdPointcY

let fourthPointcX;
let fourthPointcY;

// RECTANGLE C GLOBAL VARIABLES
let hypotenuseD;
let dLength;

let firstPointdX;
let firstPointdY;

let secondPointdX;
let secondPointdY;

let thirdPointdX;
let thirdPointdY

let fourthPointdX;
let fourthPointdY;


function setup() {
createCanvas(1200, 1200);

// RECTANGLE A CALCULATIONS

hypotenuseA = random(100,200);
let angleA = random(15, 80);
  
// first and second points
  
  firstPointaX = 600-(round(abs((hypotenuseA*cos(angleA))), 2));
  firstPointaY = 300-(round(abs((hypotenuseA*sin(angleA))), 2));
 

  secondPointaX = 600-(round(abs(((100+hypotenuseA)*cos(angleA))), 2));
  secondPointaY = 300-(round(abs(((100+hypotenuseA)*sin(angleA))), 2));
  
 

  // third and fourth points
  aLength = random(150, 350);
  thirdPointaX = firstPointaX-abs((sin(angleA)*aLength))
  thirdPointaY = firstPointaY+abs((cos(angleA)*aLength))

  fourthPointaX = thirdPointaX-abs(100*cos(angleA));
  fourthPointaY = thirdPointaY-abs(100*sin(angleA));

// RECTANGLE B CALCULATIONS

hypotenuseB = random(100, 200);
  let angleB = random(15,80)

  // first and second points 
  
  firstPointbX = 600+(round(abs((hypotenuseB*cos(angleB))), 2));
  firstPointbY = 300-(round(abs((hypotenuseB*sin(angleB))), 2));

  secondPointbX = 600+(round(abs(((100+hypotenuseB)*cos(angleB))), 2));
  secondPointbY = 300-(round(abs(((100+hypotenuseB)*sin(angleB))), 2));

  // third and fourth points
  bLength = random(150, 350);
  thirdPointbX = firstPointbX+abs((sin(angleB)*bLength))
  thirdPointbY = firstPointbY+abs((cos(angleB)*bLength))

  fourthPointbX = thirdPointbX+abs(100*cos(angleB));
  fourthPointbY = thirdPointbY-abs(100*sin(angleB));


// RECTANGLE C CALCULATIONS
hypotenuseC = random(100, 200)
let angleC = random (15, 80)

firstPointcX = 600-abs(cos(angleC)*hypotenuseC)
firstPointcY = 900+abs(sin(angleC)*hypotenuseC)

secondPointcX = 600-abs(cos(angleC)*(hypotenuseC+100))
secondPointcY = 900+abs(sin(angleC)*(hypotenuseC+100))

thirdPointcX = firstPointcX-abs((sin(angleC)*bLength))
thirdPointcY = firstPointcY-abs(((cos(angleC)*bLength)))

fourthPointcX = secondPointcX-abs((sin(angleC)*bLength))
fourthPointcY = secondPointcY-abs(((cos(angleC)*bLength)))


// RECTANGLE D CALCULATIONS
hypotenuseD = random(100, 200)
let angleD = random (15, 80)

firstPointdX = 600+abs(cos(angleD)*hypotenuseD)
firstPointdY = 900+abs(sin(angleD)*hypotenuseD)

secondPointdX = 600+abs(cos(angleD)*(hypotenuseD+100))
secondPointdY = 900+abs(sin(angleD)*(hypotenuseD+100))

thirdPointdX = firstPointdX+abs((sin(angleD)*aLength))
thirdPointdY = firstPointdY-abs(((cos(angleD)*aLength)))

fourthPointdX = secondPointdX+abs((sin(angleD)*aLength))
fourthPointdY = secondPointdY-abs(((cos(angleD)*aLength)))


}

function draw() {
background(220);

stroke(3);

// tester/non-cut lines:
// line(firstPointaX, firstPointaY, secondPointaX, secondPointaY);
// line(firstPointbX, firstPointbY, secondPointbX, secondPointbY);
// line(firstPointaX, firstPointaY, thirdPointaX, thirdPointaY);
// line(thirdPointaX, thirdPointaY, fourthPointaX, fourthPointaY);

//   line(firstPointcX, firstPointcY, secondPointcX, secondPointcY)
//   line(firstPointcX, firstPointcY, thirdPointcX, thirdPointcY)
//   line(secondPointcX, secondPointcY, fourthPointcX, fourthPointcY)

//   line(firstPointdX, firstPointdY, secondPointdX, secondPointdY)
//   line(firstPointdX, firstPointdY, thirdPointdX, thirdPointdY)
//   line(secondPointdX, secondPointdY, fourthPointdX, fourthPointdY)

line(fourthPointaX, fourthPointaY, secondPointaX, secondPointaY)
line(secondPointaX, secondPointaY, secondPointbX, secondPointbY)
line(thirdPointaX, thirdPointaY, firstPointaX, firstPointaY)
line(firstPointaX, firstPointaY, firstPointbX, firstPointbY)
line(firstPointbX, firstPointbY, thirdPointbX, thirdPointbY)
line(secondPointbX, secondPointbY, fourthPointbX, fourthPointbY)

line(fourthPointcX, fourthPointcY, secondPointcX, secondPointcY)
line(secondPointcX, secondPointcY, secondPointdX, secondPointdY)
line(thirdPointcX, thirdPointcY, firstPointcX, firstPointcY)
line(firstPointcX, firstPointcY, firstPointdX, firstPointdY)
line(firstPointdX, firstPointdY, thirdPointdX, thirdPointdY)
line(secondPointdX, secondPointdY, fourthPointdX, fourthPointdY)



//REGISTRATION LINES
stroke('orange');
noFill();
rect(100, 100, 1000, 1000);
line(100, 300, 1100, 300);
line(100, 900, 1100, 900);
point(600,300)
}