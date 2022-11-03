var c=document.getElementById("Linje1")
var ctx=c.getContext("2d");

//Laget linje 1
ctx.beginPath();
ctx.moveTo(0,15)
ctx.lineTo(500,15)
ctx.stroke();

//Lage kule
ctx.beginPath();
ctx.arc(50, 15, 12.5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#00FFF0";
ctx.fill();
