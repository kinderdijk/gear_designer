function drawGearProfile() {
    var cvs = document.getElementById("gearChart");
    cvs.width = 300;
    cvs.height = 300;

    var curve = new Bezier(150,40 , 80,30 , 105,150);

    var ctx = cvs.getContext("2d");
    drawCurve(curve, ctx);
    drawSkeleton(curve, ctx);
}
