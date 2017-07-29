var drawSkeleton = function(curve, ctx, offset, nocoords) {
  offset = offset || { x:0, y:0 };
  var pts = curve.points;
  ctx.strokeStyle = "lightgrey";
  this.drawLine(pts[0], pts[1], ctx, offset);
  if(pts.length === 3) { this.drawLine(pts[1], pts[2], ctx, offset); }
  else {this.drawLine(pts[2], pts[3], ctx, offset); }
  ctx.strokeStyle = "black";
  if(!nocoords) this.drawPoints(pts, ctx, offset);
};

var drawSingleCurve = function(curve, ctx, offset) {
  offset = offset || { x:0, y:0 };
  var ox = offset.x;
  var oy = offset.y;
  ctx.beginPath();
  var p = curve.points, i;
  ctx.moveTo(p[0].x + ox, p[0].y + oy);
  if(p.length === 3) {
    ctx.quadraticCurveTo(
      p[1].x + ox, p[1].y + oy,
      p[2].x + ox, p[2].y + oy
    );
  }
  if(p.length === 4) {
    ctx.bezierCurveTo(
      p[1].x + ox, p[1].y + oy,
      p[2].x + ox, p[2].y + oy,
      p[3].x + ox, p[3].y + oy
    );
  }
  ctx.stroke();
  ctx.closePath();
};

function drawFullCurve(context, points) {
    var newPoints = points.slice();
    var cp = [];
    curves = [];

    var n=points.length;
    var detail = true;

    //   Append and prepend knots and control points to close the curve
    newPoints.push(newPoints[0],newPoints[1],newPoints[2],newPoints[3]);
    newPoints.unshift(newPoints[n-1]);
    newPoints.unshift(newPoints[n-1]);
    for(var i=0;i<n;i+=2){
        cp=cp.concat(getControlPoints(newPoints[i],newPoints[i+1],newPoints[i+2],newPoints[i+3],newPoints[i+4],newPoints[i+5],0.5));
    }

    cp=cp.concat(cp[0],cp[1]);
    for(var i=2;i<n+2;i+=2){
        var tempCurve = new Bezier(newPoints[i],newPoints[i+1],cp[2*i-2],cp[2*i-1],cp[2*i],cp[2*i+1],newPoints[i+2],newPoints[i+3]);
        curves.push(tempCurve);

        context.strokeStyle="#555555";
        context.beginPath();
        context.moveTo(newPoints[i],newPoints[i+1]);
        context.bezierCurveTo(cp[2*i-2],cp[2*i-1],cp[2*i],cp[2*i+1],newPoints[i+2],newPoints[i+3]);
        context.stroke();
        context.closePath();
    }

    if(detail){   //   Draw the knot points.
        for(var i=0;i<n;i+=2){
            drawPoint(context,newPoints[i],newPoints[i+1],1,"#ffff00");
        }
    }
}

var drawLine = function(p1, p2, ctx, offset) {
  offset = offset || { x:0, y:0 };
  var ox = offset.x;
  var oy = offset.y;
  ctx.beginPath();
  ctx.moveTo(p1.x + ox,p1.y + oy);
  ctx.lineTo(p2.x + ox,p2.y + oy);
  ctx.stroke();
};

var drawPoints = function(points, ctx, offset) {
  offset = offset || { x:0, y:0 };
  points.forEach(function(p) {
    this.drawCircle(p, 3, ctx, offset);
  }.bind(this));
};

var drawCircle = function(event, r, ctx, offset) {
  offset = offset || { x:0, y:0 };
  var ox = offset.x;
  var oy = offset.y;
  ctx.beginPath();
  ctx.arc(event.pageX + ox, event.pageY + oy, r, 0, 2*Math.PI);
  ctx.stroke();
};
