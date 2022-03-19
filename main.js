canvas = document.getElementById("mc");
ctx = canvas.getContext("2d");
mouseEvent = "empty"


//<--touch events-->

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) 
{
    lpx = e.touches[0].clientX - canvas.offsetLeft;
    lpy = e.touches[0].clientY - canvas.offsetTop;

    color = document.getElementById("C").value;
    width = documnet.getElementById("W").value;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) 
{
    cpx = e.touches[0].clientX - canvas.offsetLeft;
    cpy = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(lpx,lpy);
        ctx.lineTo(cpx,cpy);
        ctx.stroke();

        lpx = cpx;
        lpy = cpy;
}



//<--mouse events-->


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown() 
{
    mouseEvent = "mouseDown"

    color = document.getElementById("C").value;
    width = documnet.getElementById("W").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup() 
{
    mouseEvent = "mouseUp"

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave() 
{
    mouseEvent = "mouseLeave"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) 
{
    mouseEvent = "mouseMove"

    if(mouseEvent == mouseDown){
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(lpx,lpy);
        ctx.lineTo(cpx,cpy);
        ctx.stroke();
    }
}         

