
var last_x, last_y;
canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height300-300;
if(width<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchdown);
function my_touchstart(e) {
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
}



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
      if (mouseEvent == "mouseDown") { ctx.beginPath();
         ctx.strokeStyle = color; ctx.lineWidth = width_of_line; 
         
         ctx.moveTo(last_x, last_y); 
         console.log("Current position of x and y coordinates = "); 
         console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y); 
         ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
          ctx.stroke(); } last_x = current_position_of_mouse_x; 
          last_y = current_position_of_mouse_y;
}