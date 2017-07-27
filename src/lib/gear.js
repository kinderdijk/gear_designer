function drawGearProfile() {

    var curve = new Bezier(150,40 , 80,30 , 105,150);

    drawCurve(curve, context);
    drawSkeleton(curve, context);
}


canvas.addEventListener("click", function(event) {

    var coords = relMouseCoordinates(canvas, event);

    pointArray.push(coords.x);
    pointArray.push(coords.y);

    context.clearRect(0, 0, canvas.width, canvas.height);
    if(pointArray.length > 2) {
        drawSpline(context, pointArray, .5, true);
    }
    for(i=0; i<pointArray.length; i+=2) {
        drawPoint(context, pointArray[i], pointArray[i+1], 8, '#000000');
    }

});

canvas.addEventListener("mousemove", function(event) {
    var mousePos = getMouseCoords(canvas, event);

    for(i=0; i<pointArray.length; i+=2) {
        if(Math.abs(pointArray[i]-mousePos.x) < 10 && Math.abs(pointArray[i+1]-mousePos.y) < 10) {
            console.log("Found point.");
            canvas.style.cursor = "pointer";
        } else {
            canvas.style.cursor = "default";
        }
    }
})

function getMouseCoords(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

function relMouseCoordinates(canvas, event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;

    do{
        totalOffsetX += canvas.offsetLeft - canvas.scrollLeft;
        totalOffsetY += canvas.offsetTop - canvas.scrollTop;
    }
    while(canvas = canvas.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    console.log("Points: " + canvasX + ", " + canvasY);
    return {x:canvasX, y:canvasY}
}

function clearAllPoints() {
    pointArray = [];
    var cvs = document.getElementById("gearChart");
    var ctx = cvs.getContext("2d");

    ctx.clearRect(0,0,cvs.width, cvs.height);
}
