const y = 15
const radius = 12.5
const width = 500

// Regner ut koordinater ut fra prosent delen
function utregningOutput(prosent) {
    return ((prosent * width) / 100) + 50
}

//Funskjon tar inn canvas elmenet og lage en sirkel med parameter til funsjonen
function lageSirkel(ctx, prosent, farge) {
    ctx.beginPath();
    ctx.arc(utregningOutput(prosent), y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = farge
    ctx.fill();
}

//Henter linje 1
var c=document.getElementById("Linje1")
var ctx=c.getContext("2d");

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

// Linje 6
var c=document.getElementById("Linje6")
var ctx=c.getContext("2d");

//Laget linje 1
ctx.beginPath();
ctx.moveTo(50,y)
ctx.lineTo(550,15)
ctx.stroke();

//Lage kule 1
lageSirkel(ctx, 5, "#00FFF0")

//Lage kule 2
lageSirkel(ctx, 80, "blue")

//Lage kule 3
lageSirkel(ctx, 50, "red")

//Lage kule 4
lageSirkel(ctx, 70, "green")

//Lage kule 5
lageSirkel(ctx, 34, "pink")

//Lage kule 6
lageSirkel(ctx, 99, "purple")

//Lage kule 7
lageSirkel(ctx, 15, "black")


//henter linje 2
var c=document.getElementById("Linje2")
var ctx=c.getContext("2d");

//Laget linje 2
ctx.beginPath();
ctx.moveTo(50, y)
ctx.lineTo(550, 15)
ctx.stroke();

//Lage kule 1
lageSirkel(ctx, 5, "#00FFF0")

//Lage kule 2
lageSirkel(ctx, 97, "blue")

//Lage kule 3
lageSirkel(ctx, 50, "red")

//Lage kule 4
lageSirkel(ctx, 56, "green")

//Lage kule 5
lageSirkel(ctx, 40, "pink")

//Lage kule 6
lageSirkel(ctx, 11, "purple")

//Lage kule 7
lageSirkel(ctx, 31, "black")

//henter linje 3
var c=document.getElementById("Linje3")
var ctx=c.getContext("2d");

//Laget linje 2
ctx.beginPath();
ctx.moveTo(50, y)
ctx.lineTo(550, 15)
ctx.stroke();

//Lage kule 1
lageSirkel(ctx, 90, "#00FFF0")

//Lage kule 2
lageSirkel(ctx, 9, "blue")

//Lage kule 3
lageSirkel(ctx, 40, "red")

//Lage kule 4
lageSirkel(ctx, 84, "green")

//Lage kule 5
lageSirkel(ctx, 30, "pink")

//Lage kule 6
lageSirkel(ctx, 60, "purple")

//Lage kule 7
lageSirkel(ctx, 20, "black")




















// Linje 7
var c=document.getElementById("Linje7")
var ctx=c.getContext("2d");

//Laget linje 1
ctx.beginPath();
ctx.moveTo(50,y)
ctx.lineTo(550,15)
ctx.stroke();

//Lage kule 1
lageSirkel(ctx, 10, "#00FFF0")

//Lage kule 2
lageSirkel(ctx, 87, "blue")

//Lage kule 3
lageSirkel(ctx, 34, "red")

//Lage kule 4
lageSirkel(ctx, 90, "green")

//Lage kule 5
lageSirkel(ctx, 55, "pink")

//Lage kule 6
lageSirkel(ctx, 1, "purple")

//Lage kule 7
lageSirkel(ctx, 51, "black")