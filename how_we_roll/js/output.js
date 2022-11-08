var c=document.getElementById("Linje1")
var ctx=c.getContext("2d");

const y = 15
const radius = 12.5

//Laget linje 1
ctx.beginPath();
ctx.moveTo(50, y)
ctx.lineTo(550, 15)
ctx.stroke();

//Lage kule
ctx.beginPath();
ctx.arc(50, y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#00FFF0";
ctx.fill();

//Lage kule 2
ctx.beginPath();
ctx.arc(300,y,radius,0,2* Math.PI);
ctx.stroke();
ctx.fillStyle="blue";
ctx.fill();

