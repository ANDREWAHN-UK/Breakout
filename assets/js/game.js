
const cvs =document.getElementById("breakout");

const ctx = cvs.getContext("2d");



function drawRect(x,y){

    ctx.fillstyle = "blue";

    ctx.fillRect(x,y, 100, 10);
}

drawRect(350,600)

function loop(){

    ctx.clear (0,0, cvs.width, cvs.height);
    drawRect(350, y)
    y += 50;
    requestAnimationFrame(loop);

}

loop()
