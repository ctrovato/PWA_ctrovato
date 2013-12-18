/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/17/13
 * Time: 5:38 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    var canvas1 = document.createElement("canvas");
    document.body.appendChild(canvas1);
    var ctx = canvas1.getContext("2d");
    canvas1.width = 400;
    canvas1.height = 400;
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 5;
    ctx.moveTo(0,0);
    ctx.lineTo(400,400);
//    ctx.stroke();
/*___NEW LINE___*/
    ctx.beginPath();
    ctx.strokeStyle = "#00FF00";    /* OR     ctx.strokeStyle = "rgb (0,255,0)" */
    ctx.lineWidth = 5;
    ctx.moveTo(400,0);
    ctx.lineTo(0,400);
//  ctx.stroke();

    for(var i = 0; i<3000; i++){
        ctx.beginPath();
        ctx.moveTo(Math.random()*400,Math.random()*400);
        ctx.lineTo(Math.random()*400,Math.random()*400);

        var red = ~~(Math.random()*255);
        var green = ~~(Math.random()*255);
        var blue = ~~(Math.random()*255);

        ctx.strokeStyle = "rgb("+red+","+green+","+blue+")";

//      ctx.stroke();
    }

    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "red";
    ctx.lineWidth = 2;
    ctx.rect(200, 200, 50, 50);



    ctx.stroke()
    ctx.fill()

    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "blue";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(200, 200, 20, 0,Math.PI*2 );
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "35px Tahoma";
    ctx.fillText("Hello World.", 110, 110);



})();
