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
let thirdPointcY;

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
let thirdPointdY;

let fourthPointdX;
let fourthPointdY;



// MIDSECTION GLOBAL VARIABLES
let shorterMiddleGap;
let leftYaverage;
let rightYaverage;
let leftmostX;
let rightmostX;
let leftMidsectionAngle;
let rightMidsectionAngle;
let midsectionRectLength;

let leftRectaX;
let leftRectaY;
let leftRectbX;
let leftRectbY;
let leftRectcX;
let leftRectcY;
let leftRectdX;
let leftRectdY;

function setup() {
createCanvas(1200, 1200);
angleMode(DEGREES)
// RECTANGLE A CALCULATIONS

hypotenuseA = random(100,200);
let angleA = random(15, 80);
  
  firstPointaX = 600-(round(abs((hypotenuseA*cos(angleA))), 2));
  firstPointaY = 300-(round(abs((hypotenuseA*sin(angleA))), 2));
 
  secondPointaX = 600-(round(abs(((100+hypotenuseA)*cos(angleA))), 2));
  secondPointaY = 300-(round(abs(((100+hypotenuseA)*sin(angleA))), 2));
  
  aLength = random(150, 350);

  thirdPointaX = firstPointaX-abs((sin(angleA)*aLength));
  thirdPointaY = firstPointaY+abs((cos(angleA)*aLength));

  fourthPointaX = thirdPointaX-abs(100*cos(angleA));
  fourthPointaY = thirdPointaY-abs(100*sin(angleA));

// RECTANGLE B CALCULATIONS

hypotenuseB = random(100, 200);
let angleB = random(15,80);
  
  firstPointbX = 600+(round(abs((hypotenuseB*cos(angleB))), 2));
  firstPointbY = 300-(round(abs((hypotenuseB*sin(angleB))), 2));

  secondPointbX = 600+(round(abs(((100+hypotenuseB)*cos(angleB))), 2));
  secondPointbY = 300-(round(abs(((100+hypotenuseB)*sin(angleB))), 2));

  bLength = random(150, 350);

  thirdPointbX = firstPointbX+abs((sin(angleB)*bLength));
  thirdPointbY = firstPointbY+abs((cos(angleB)*bLength));

  fourthPointbX = thirdPointbX+abs(100*cos(angleB));
  fourthPointbY = thirdPointbY-abs(100*sin(angleB));


// RECTANGLE C CALCULATIONS
hypotenuseC = random(100, 200);
let angleC = random (15, 80);

  firstPointcX = 600-abs(cos(angleC)*hypotenuseC);
  firstPointcY = 900+abs(sin(angleC)*hypotenuseC);

  secondPointcX = 600-abs(cos(angleC)*(hypotenuseC+100));
  secondPointcY = 900+abs(sin(angleC)*(hypotenuseC+100));

  thirdPointcX = firstPointcX-abs((sin(angleC)*bLength));
  thirdPointcY = firstPointcY-abs(((cos(angleC)*bLength)));

  fourthPointcX = secondPointcX-abs((sin(angleC)*bLength));
  fourthPointcY = secondPointcY-abs(((cos(angleC)*bLength)));


// RECTANGLE D CALCULATIONS
hypotenuseD = random(100, 200);
let angleD = random (15, 80);

  firstPointdX = 600+abs(cos(angleD)*hypotenuseD);
  firstPointdY = 900+abs(sin(angleD)*hypotenuseD);

  secondPointdX = 600+abs(cos(angleD)*(hypotenuseD+100));
  secondPointdY = 900+abs(sin(angleD)*(hypotenuseD+100));

  thirdPointdX = firstPointdX+abs((sin(angleD)*aLength));
  thirdPointdY = firstPointdY-abs(((cos(angleD)*aLength)));

  fourthPointdX = secondPointdX+abs((sin(angleD)*aLength));
  fourthPointdY = secondPointdY-abs(((cos(angleD)*aLength)));


// MIDSECTION CALCULATIONS
leftYaverage = (thirdPointaY+thirdPointcY)/2;
rightYaverage = (thirdPointbY+thirdPointdY)/2;
leftmostX = min(fourthPointaX, thirdPointaX, thirdPointcX, fourthPointcX);
rightmostX = max(fourthPointbX, thirdPointbX, thirdPointdX, fourthPointdX);

leftMidsectionAngle = atan((fourthPointcY-fourthPointaY)/(max(fourthPointcX, fourthPointaX)-min(fourthPointcX, fourthPointaX)))
console.log(leftMidsectionAngle)
rightMidsectionAngle = abs(atan((fourthPointbY-fourthPointdY)/(max(fourthPointbX, fourthPointdX)-min(fourthPointbX, fourthPointdX))))
console.log(rightMidsectionAngle)


let hypotenuseA3C3 = sqrt(sq(thirdPointcY-thirdPointaY)+sq(max(thirdPointaX, thirdPointcX)-min(thirdPointaX,       thirdPointcX)))
let hypotenuseB3D3 = sqrt(sq(thirdPointdY-thirdPointbY)+sq(max(thirdPointbX, thirdPointdX)-min(thirdPointbX, thirdPointdX)))
midsectionRectLength = min(hypotenuseA3C3, hypotenuseB3D3)-(min(hypotenuseA3C3, hypotenuseB3D3)/4)
let midsectionRectHypotenuse = sqrt(sq(midsectionRectLength)+1000)
console.log(midsectionRectLength)

let leftRectAngleFactorY = (100*tan(90-leftMidsectionAngle))
let leftRectAngleFactorX = sin(90-leftMidsectionAngle)*(midsectionRectHypotenuse/2)
leftRectaX = leftmostX + 50 -leftRectAngleFactorX
leftRectaY = leftYaverage-(midsectionRectLength/2) - leftRectAngleFactorY
leftRectbX = leftmostX + 50 +leftRectAngleFactorX
leftRectbY = leftYaverage+(midsectionRectLength/2) - leftRectAngleFactorY
leftRectcX = leftmostX - 50 -leftRectAngleFactorX
leftRectcY = leftYaverage-(midsectionRectLength/2) +leftRectAngleFactorY
leftRectdX = leftmostX - 50 +leftRectAngleFactorX
leftRectdY = leftYaverage+(midsectionRectLength/2) +leftRectAngleFactorY


let rightRectAngleFactorY = (100*tan(90-rightMidsectionAngle))
let rightRectAngleFactorX = sin(90-rightMidsectionAngle)*(midsectionRectHypotenuse/2)

rightRectaX = rightmostX + 50 -rightRectAngleFactorX
rightRectaY = rightYaverage-(midsectionRectLength/2) - rightRectAngleFactorY
rightRectbX = rightmostX + 50 +rightRectAngleFactorX
rightRectbY = rightYaverage+(midsectionRectLength/2) - rightRectAngleFactorY
rightRectcX = rightmostX - 50 -rightRectAngleFactorX
rightRectcY = rightYaverage-(midsectionRectLength/2) +rightRectAngleFactorY
rightRectdX = rightmostX - 50 +rightRectAngleFactorX
rightRectdY = rightYaverage+(midsectionRectLength/2) +rightRectAngleFactorY
}

function draw() {
background(220);

stroke(3);

// tester/non-cut lines:
// line(rightRectcX, rightRectcY, rightRectaX, rightRectaY)
// line(rightRectcX, rightRectcY, rightRectdX, rightRectdY)
// line(rightRectdX, rightRectdY, rightRectbX, rightRectbY)
// line(rightRectbX, rightRectbY, rightRectaX, rightRectaY)


// lines for top section of frame
line(fourthPointaX, fourthPointaY, secondPointaX, secondPointaY)
line(secondPointaX, secondPointaY, secondPointbX, secondPointbY)
line(thirdPointaX, thirdPointaY, firstPointaX, firstPointaY)
line(firstPointaX, firstPointaY, firstPointbX, firstPointbY)
line(firstPointbX, firstPointbY, thirdPointbX, thirdPointbY)
line(secondPointbX, secondPointbY, fourthPointbX, fourthPointbY)
// lines for bottom section of frame
line(fourthPointcX, fourthPointcY, secondPointcX, secondPointcY)
line(secondPointcX, secondPointcY, secondPointdX, secondPointdY)
line(thirdPointcX, thirdPointcY, firstPointcX, firstPointcY)
line(firstPointcX, firstPointcY, firstPointdX, firstPointdY)
line(firstPointdX, firstPointdY, thirdPointdX, thirdPointdY)
line(secondPointdX, secondPointdY, fourthPointdX, fourthPointdY)
// left midsection connector lines
line(fourthPointaX, fourthPointaY, leftRectcX, leftRectcY)
line(thirdPointaX, thirdPointaY, leftRectaX, leftRectaY)
line(leftRectcX, leftRectcY, leftRectdX, leftRectdY)
line(leftRectbX, leftRectbY, leftRectaX, leftRectaY)
line(fourthPointcX, fourthPointcY, leftRectdX, leftRectdY)
line(thirdPointcX, thirdPointcY, leftRectbX, leftRectbY)
// right midsection connector lines
line (thirdPointbX, thirdPointbY, rightRectcX, rightRectcY)
line (fourthPointbX, fourthPointbY, rightRectaX, rightRectaY)
line(rightRectaX, rightRectaY, rightRectbX, rightRectbY)
line(rightRectcX, rightRectcY, rightRectdX, rightRectdY)
line(thirdPointdX, thirdPointdY, rightRectdX, rightRectdY)
line(fourthPointdX, fourthPointdY, rightRectbX, rightRectbY)

//REGISTRATION LINES
stroke('orange');
noFill();
rect(100, 100, 1000, 1000);
line(100, 300, 1100, 300);
line(100, 900, 1100, 900);
point(600,300)
circle(leftmostX, leftYaverage, 10);
circle(rightmostX, rightYaverage, 10)
}