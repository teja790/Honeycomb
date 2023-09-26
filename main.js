var points=0;
function increase(){
    points=points+5;
    document.getElementById("pointslabel").textContent=points;
}
 function decrease(){
    points=points-5;
    document.getElementById("pointslabel").textContent=points;
}