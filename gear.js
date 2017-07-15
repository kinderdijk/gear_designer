var cvs = document.getElementById("myCanvas");
cvs.width = 300;
cvs.height = 300;
var ctx = cvs.getContext("2d");

var drawLine = function() {
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(120, 170);
    ctx.stroke();
}