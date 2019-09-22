var timer1;
var timer2;

function moveDivR(){
rd = document.getElementById("reddiv");
rd.style.left = (Math.floor((Math.random() * 300))) + "px";
rd.style.top =  (Math.floor((Math.random() * 300))) + "px";
}

function moveDivG(){
gd = document.getElementById("greendiv");
gd.style.left = (Math.floor((Math.random() * 300))) + "px";
gd.style.top =  (Math.floor((Math.random() * 300))) + "px";
}