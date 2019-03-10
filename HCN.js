
function Rectangle(width,height) {
 this.width = width;
 this.height = height;
 this.changeWidth = function (width) {
     return this.width = width;
 };
   this.changeHeight =  function (height) {
     return this.weight = height;
 };
   this.getAera = function (width,height) {
       return width*height;
   };
   this.getPerimeter = function (width,height) {
       return 2*(width + height);
   };

}
let retangle = new Rectangle(500,300);
let width = retangle.changeWidth(700);
let height = retangle.changeHeight(400);
console.log(width);
console.log(height);
let Aera = retangle.getAera(width,height);
let Perimeter = retangle.getPerimeter(width,height);
alert("Aera = "+ Aera + " and Perimeter = "+ Perimeter);
function penRectangle() {
    let c = document.getElementById("myCavans");
    let pen = c.getContext("2d");
    pen.beginPath();
    pen.rect(200,200,retangle.width,retangle.height);
    pen.fillStyle = " blue";
    pen.fill();
    pen.stroke();
}
penRectangle();


