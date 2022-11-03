
//henter linje 2
var c=document.getElementById("Linje2")
var ctx=c.getContext("2d");

//Laget linje 2
ctx.beginPath();
ctx.moveTo(0,y)
ctx.lineTo(500,15)
ctx.stroke();

//Lage kule 1 i linje 2
ctx.beginPath();
ctx.arc(350, y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#00FFF0";
ctx.fill();

//Lage kule 2 i linje 2
ctx.beginPath();
ctx.arc(150, y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill(); 

//Lage kule 3 i linje 2
ctx.beginPath();
ctx.arc(75, y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill(); 


//henter linje 3
var c=document.getElementById("Linje3")
var ctx=c.getContext("2d");

//Laget linje 3
ctx.beginPath();
ctx.moveTo(0,y)
ctx.lineTo(500,15)
ctx.stroke();

//Lage kule 1 i linje 3
ctx.beginPath();
ctx.arc(350, y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#00FFF0";
ctx.fill();

//Lage kule 2 i linje 3
ctx.beginPath();
ctx.arc(150, y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill(); 

//Lage kule 3 i linje 3
ctx.beginPath();
ctx.arc(440, y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill(); 










