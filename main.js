function yes(){
    alert('thank you (kiss, kiss) send place, time and date <3'); 
}
function not(){
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = Math.random() * width;
    newHeigth = Math.random() * height;

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeigth + "px";
    document.getElementById('btnNo').style.top = newHeigth + "px";

}