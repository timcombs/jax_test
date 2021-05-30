
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

    // draw some content
    ctx.lineWidth=3;
    ctx.fillStyle="blue";
    ctx.strokeStyle="red";
    ctx.rect(50,50,100,50);
    ctx.fill();
    ctx.stroke();
    ctx.font="14px Verdana";
    ctx.fillStyle="white";
    ctx.fillText("Scale Me",65,75);

    function saveResizeAndRedisplay(scaleFactor){

        // save the canvas content as imageURL
        var data=canvas.toDataURL();

        // resize the canvas
        canvas.width*=scaleFactor;
        canvas.height*=scaleFactor;

        // scale and redraw the canvas content
        var img=new Image();
        img.onload=function(){
            ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
        }
        img.src=data;

    }

    $("#resizer").click(function(){ saveResizeAndRedisplay(1.5); });

}); // end $(function(){});