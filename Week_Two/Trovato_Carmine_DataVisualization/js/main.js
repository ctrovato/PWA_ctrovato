/**
 * Created By:
 * User: CarmineTrovato
 * Date: 12/17/13
 * Time: 9:23 PM
 */

(function (){

    var canvas = document.createElement("canvas");

    document.body.appendChild(canvas);

/*____Canvas Size_____*/
        canvas.width = 800;
        canvas.height = 600;

/*____ getCanvas accesses the API */
        var ctx = canvas.getContext("2d");

/*____Background Image____*/
        var img = new Image();
        img.src = "images/PWA_Background.jpg";
        img.addEventListener("load",onLoad);

    function onLoad(){
        ctx.drawImage(img,0,0,800,600);
        drawChart();
    }

/*___Income Bar Size Array____*/
    var income = [100,150,220];

    function drawChart(){

        ctx.beginPath();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;

        ctx.rect(1,1,798,598);

/*____Horizontal lines______*/
        ctx.moveTo(80,460);
        ctx.lineTo(740,460);

        ctx.moveTo(80,410);
        ctx.lineTo(740,410);

        ctx.moveTo(80,360);
        ctx.lineTo(740,360);

        ctx.moveTo(80,310);
        ctx.lineTo(740,310);

        ctx.moveTo(80,260);
        ctx.lineTo(740,260);

/*___ctx.stroke(); creates the line from pixel coordinates given above */
        ctx.stroke();

/*___Vertical line______*/
        ctx.beginPath();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 6;
        ctx.moveTo(80,461);
        ctx.lineTo(80,230);

        ctx.stroke();


/*___************ BAR GRAPH FILL DOES NOT LOAD IN MOZILLA FireFOX **********____*/

/* ___September______*/
        ctx.beginPath();
        ctx.rect(148,458,80,-(income[0]));
        ctx.strokeStyle = "#FF0000";
        ctx.fillStyle = "FF0000";
        ctx.fill();
        ctx.stroke();

/*____October_______*/
        ctx.beginPath();
        ctx.rect(348,458,80,-(income[1]));
        ctx.strokeStyle = "#FF9900";
        ctx.fillStyle = "FF9900";
        ctx.fill();
        ctx.stroke();



/*____November______*/
        ctx.beginPath();
        ctx.rect(547,458,80,-(income[2]));
        ctx.strokeStyle = "#FFFF00";
        ctx.fillStyle = "FFFF00";
        ctx.fill();
        ctx.stroke();




        ctx.beginPath();
        ctx.fillStyle = "000000";
        ctx.font = "18px Ariel";
        ctx.fillText("September",149,480);

        ctx.fillText("October",359,480);

        ctx.fillText("November",550,480);

        ctx.fillText("50,000",22,460);

        ctx.fillText("100,000",14,414);

        ctx.fillText("150,000",14,365);

        ctx.fillText("200,000",14,315);

        ctx.fillText("250,000",14,265);

        ctx.stroke();

    }


})();