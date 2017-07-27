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

var drawCurve = function(curve, ctx, offset) {
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

//var drawCircle = function(p, r, ctx, offset) {
//  offset = offset || { x:0, y:0 };
//  var ox = offset.x;
//  var oy = offset.y;
//  ctx.beginPath();
//  ctx.arc(p.x + ox, p.y + oy, r, 0, 2*Math.PI);
//  ctx.stroke();
//};

var drawCircle = function(event, r, ctx, offset) {
  offset = offset || { x:0, y:0 };
  var ox = offset.x;
  var oy = offset.y;
  ctx.beginPath();
  ctx.arc(event.pageX + ox, event.pageY + oy, r, 0, 2*Math.PI);
  ctx.stroke();
};
