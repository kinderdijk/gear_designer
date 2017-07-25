function drawLine() {
    var cvs = document.getElementById("gearChart");
    cvs.width = 300;
    cvs.height = 300;

    var curve = new Bezier(150,40 , 80,30 , 105,150);

    var ctx = cvs.getContext("2d");
    ctx.beginPath();
    var p = curve.points, i;
    ctx.moveTo(p[0].x, p[0].y);
    if(p.length === 3) {
    ctx.quadraticCurveTo(
      p[1].x, p[1].y,
      p[2].x, p[2].y
    );
    }
    if(p.length === 4) {
    ctx.bezierCurveTo(
      p[1].x, p[1].y,
      p[2].x, p[2].y,
      p[3].x, p[3].y
    );
    }
    ctx.stroke();
    ctx.closePath();
}
