function drawGearProfile() {
    var cvs = document.getElementById("gearChart");
    cvs.width = 1000;
    cvs.height = 1000;

    var curve = new Bezier(150,40 , 80,30 , 105,150);

    var ctx = cvs.getContext("2d");
    drawCurve(curve, ctx);
    drawSkeleton(curve, ctx);
}


document.getElementById("gearChart").addEventListener("click", function(event) {
    var cvs = document.getElementById("gearChart");
    var ctx = cvs.getContext("2d");

    var coords = relMouseCoordinates(cvs, event);

    pointArray.push(coords.x);
    pointArray.push(coords.y);

    ctx.clearRect(0, 0, cvs.width, cvs.height);
    if(pointArray.length > 2) {
        drawSpline(ctx, pointArray, .5, true);
    }
    for(i=0; i<pointArray.length; i+=2) {
        drawPoint(ctx, pointArray[i], pointArray[i+1], 8, '#000000');
    }

});

function relMouseCoordinates(cvs, event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = cvs;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}

function clearAllPoints() {
    pointArray = [];
    var cvs = document.getElementById("gearChart");
    var ctx = cvs.getContext("2d");

    ctx.clearRect(0,0,cvs.width, cvs.height);
}
