const y = 15
const radius = 12.5
const width = 500

//regner ut koordinater for sirker på y-aksen
function utregningOutput(prosent) {
    return (prosent * width) / 100
}

// function lageLine(id) {
//     var c=document.getElementById(id)
//     var ctx=c.getContext("2d");

//     //lage linje
//     ctx.beginPath();
//     ctx.moveTo(0,y)
//     ctx.lineTo(width,15)
//     ctx.stroke();
// }

// lageLine("linje1")


var id = "linje1"
var c=document.getElementById(id)
var ctx=c.getContext("2d");

//Laget linje 1
ctx.beginPath();
ctx.moveTo(0,y)
ctx.lineTo(width,15)
ctx.stroke();

//Lage kule 1
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
