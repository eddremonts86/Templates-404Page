
var container = document.getElementById("container");
window.onmousemove = function(e){
    var x = e.clientX,
        y = e.clientY;
    container.style.backgroundPositionX = x / 5 +'px'; 
    container.style.backgroundPositionY = y / 5 +'px';   
}