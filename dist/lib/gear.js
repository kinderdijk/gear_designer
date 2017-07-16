"use strict";

var _bezierJs = require("bezier-js");

var _bezierJs2 = _interopRequireDefault(_bezierJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drawLine = function drawLine() {
    var cvs = document.getElementById("myCanvas");
    cvs.width = 300;
    cvs.height = 300;
    var ctx = cvs.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(120, 170);
    ctx.stroke();
};