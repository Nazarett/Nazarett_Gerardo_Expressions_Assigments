//What is the area of a rectangle given
// that half of the width is 17.5 sq ft
// and the height is double of its true value which is 84 sq ft

//A = W * H This is the formula to calculate the area.

var width = 17.5 * 2; //Multiply by 2 since we only have half of the width
console.log(" Width " + width + " Sq Ft "); //Width

var height = 84 / 2; //Divide by 2 since we got double of the actual height
console.log(" Height " + height + " Sq Ft "); //Height

var area = width * height + " Sq Ft "; //This will give us the area.
console.log(" Area " + area); //Area of the rectangle.

var width = [15, 8, 23, 11, 6]; //Different width
var height = [7, 12, 5, 21, 9];// Different height
console.log(" Widths " + width);
console.log(" Heights " + height);
var area0 = width [0] * height [0];//Finding first area
console.log(" Area0 " + area0 + " Sq Ft "); //First area

var area1 = width [1] * height [1]; //Finding second
console.log(" Area1 " + area1 + " Sq Ft "); //Second area

var area2 = width [2] * height [2]; //Finding third area
console.log(" Area2 " + area2 + " Sq Ft "); //Third area

var area3 = width [3] * height [3]; //Finding fourth area
console.log(" Area3 " + area3 + " Sq Ft "); //Fourth area

var area4 = width [4] * height [4]; // Finding fifth area
console.log(" Area4 " + area4 + " Sq Ft "); // Fifth area

//Project
var base = prompt("Calculating the area of a Triangle\nWhat is the base?");
var vheight = prompt("What is the vertical height?");
var area = 1/2 * base * vheight
console.log(area + " Sq Ft ")