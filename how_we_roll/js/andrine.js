const width = 500

function utregningOutput(prosent) {
    return (prosent * width) / 100
}

// Linje 6
var c=document.getElementById("Linje6")
var ctx=c.getContext("2d");

//Laget linje 1
ctx.beginPath();
ctx.moveTo(0,y)
ctx.lineTo(500,15)
ctx.stroke();

//Lage kule 1
ctx.beginPath();
ctx.arc(utregningOutput(5), y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#00FFF0";
ctx.fill();

//Lage kule 2
ctx.beginPath();
ctx.arc(utregningOutput(80),y,radius,0,2* Math.PI);
ctx.stroke();
ctx.fillStyle="blue";
ctx.fill();

//Lage kule 3
ctx.beginPath();
ctx.arc(utregningOutput(50),y,radius,0,2* Math.PI);
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();


// Linje 7
var c=document.getElementById("Linje7")
var ctx=c.getContext("2d");

//Laget linje 1
ctx.beginPath();
ctx.moveTo(0,y)
ctx.lineTo(500,15)
ctx.stroke();

//Lage kule 1
ctx.beginPath();
ctx.arc(utregningOutput(70), y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#00FFF0";
ctx.fill();

//Lage kule 2
ctx.beginPath();
ctx.arc(utregningOutput(50),y,radius,0,2* Math.PI);
ctx.stroke();
ctx.fillStyle="blue";
ctx.fill();

//Lage kule 3
ctx.beginPath();
ctx.arc(utregningOutput(90),y,radius,0,2* Math.PI);
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();

