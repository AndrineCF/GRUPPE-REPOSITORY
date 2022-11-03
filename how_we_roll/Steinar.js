var c=document.getElementById("Linje4")
var ctx=c.getContext("2d");

//Laget linje 4
ctx.beginPath();
ctx.moveTo(0,y)
ctx.lineTo(500,15)
ctx.stroke();

//Lage kule 1
ctx.beginPath();
ctx.arc(100, y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#00FFF0";
ctx.fill();

//Lage kule 2
ctx.beginPath();
ctx.arc(450,y,radius,0,2* Math.PI);
ctx.stroke();
ctx.fillStyle="blue";
ctx.fill();

//Lage kule 3
ctx.beginPath();
ctx.arc(400,y,radius,0,2* Math.PI);
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();

var c=document.getElementById("Linje5")
var ctx=c.getContext("2d");

//Laget linje 5
ctx.beginPath();
ctx.moveTo(0,y)
ctx.lineTo(500,15)
ctx.stroke();

//Lage kule 1
ctx.beginPath();
ctx.arc(200, y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#00FFF0";
ctx.fill();

//Lage kule 2
ctx.beginPath();
ctx.arc(350,y,radius,0,2* Math.PI);
ctx.stroke();
ctx.fillStyle="blue";
ctx.fill();

//Lage kule 3
ctx.beginPath();
ctx.arc(75,y,radius,0,2* Math.PI);
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();

