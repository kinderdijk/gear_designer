var moving = false;
var found = -1;
var detail = true;
var defineAxisToggle = false;

canvas.addEventListener("mousemove", function(event) {
    var mousePos = getMouseCoords(canvas, event);

    if(moving) {
        pointArray[found] = mousePos.x;
        pointArray[found+1] = mousePos.y;

        context.clearRect(0,0,canvas.width, canvas.height);
        if(pointArray.length > 2) {
            drawFullCurve(context, pointArray);
        }
        for(i=0; i<pointArray.length; i+=2) {
            drawPoint(context,pointArray[0],pointArray[1],1,"#ffff00");
        }
    } else {

        for(i=0; i<pointArray.length; i+=2) {
            if(Math.abs(pointArray[i]-mousePos.x) < 10 && Math.abs(pointArray[i+1]-mousePos.y) < 10) {
                canvas.style.cursor = "pointer";
                found = i;
                break;
            } else {
                canvas.style.cursor = "default";
                found = -1;
            }
        }
    }
});

canvas.addEventListener("mousedown", function(event) {
    if(found >= 0) {
        moving = true;
    } else {
        moving = false;
    }
});

canvas.addEventListener("mouseup", function(event) {
    if(!moving) {
        var coords = relMouseCoordinates(canvas, event);

        context.clearRect(0, 0, canvas.width, canvas.height);
        if(defineAxisToggle) {
            axisPoint1 = [];

            axisPoint1.push(coords.x);
            axisPoint1.push(coords.y);
        } else {
            pointArray.push(coords.x);
            pointArray.push(coords.y);
        }

        if(pointArray.length > 2) {
            drawFullCurve(context, pointArray);
        } else {
            drawPoint(context,pointArray[0],pointArray[1],1,"#ffff00");
        }

        if(axisPoint1.length === 2) {
            drawPoint(context,axisPoint1[0],axisPoint1[1],5,"#ffff00");
        }
    } else {
        moving = false;
    }
});

function getMouseCoords(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
};

function relMouseCoordinates(canvas, event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;

    canvasX = event.pageX - canvas.offsetLeft;
    canvasY = event.pageY - canvas.offsetTop;

    return {x:canvasX, y:canvasY}
};

function clearAllPoints() {
    pointArray = [];
    var cvs = document.getElementById("gearChart");
    var ctx = cvs.getContext("2d");

    ctx.clearRect(0,0,cvs.width, cvs.height);
};

function toggleDetail() {
    detail = !detail;
    context.clearRect(0,0,canvas.width, canvas.height);
    drawSpline(context, pointArray, .5, true, detail);

    if(axisPoint1.length === 2) {
        drawPoint(context,axisPoint1[0],axisPoint1[1],5,"#ffff00");
    }
}

function defineAxis() {
    defineAxisToggle = !defineAxisToggle;

    var axisButton = document.getElementById("defineAxis");
    if(defineAxisToggle) {
        axisButton.style.backgroundColor = '#aaaaaa';
    } else {
        axisButton.style.backgroundColor = '#ffffff';
    }
}
