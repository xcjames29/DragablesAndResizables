let left = document.getElementById("left");

let right = document.getElementById("right");
let drag = document.getElementById("drages");

let X =0;
let mouseMoveHandler = (evt)=>{
    var posX = evt.clientX;
    let newLeft= drag.offsetLeft + (posX -X)
    console.log(newLeft,document.body.clientWidth);
    drag.style.left = newLeft<0?"0px": newLeft+40 >= document.body.clientWidth?(document.body.clientWidth-40) +"px": newLeft +"px";
    left.style.width = newLeft+"px";
    right.style.width = (document.body.clientWidth - newLeft) +"px";
    X = evt.clientX;
};


drag.addEventListener("mousedown",(e)=>{
    X = e.clientX;
    drag.addEventListener("mousemove",mouseMoveHandler)
})


drag.addEventListener("mouseup",()=>{
   drag.removeEventListener("mousemove",mouseMoveHandler);
})

drag.addEventListener("mouseleave",()=>{
    drag.removeEventListener("mousemove",mouseMoveHandler);
})