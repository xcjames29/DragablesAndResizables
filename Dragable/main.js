let box = document.getElementById("dragable");


let X= 0;
let Y= 0;

let mouseMoveHandler = (evt)=>{
    var posX = evt.clientX;
    var posY = evt.clientY;
    
    let newLeft= box.offsetLeft + (posX -X)
    let newTop =box.offsetTop + (posY-Y)
    console.log(newLeft, newTop, document.body.clientWidth,document.body.clientHeight);
    box.style.left = newLeft<0?"0px": newLeft+150 >= document.body.clientWidth?(document.body.clientWidth-150) +"px": newLeft +"px";
    box.style.top = newTop<0?"0px": newTop+150 >= document.body.clientHeight?(document.body.clientHeight-150) +"px": newTop +"px";

    X = evt.clientX;
    Y= evt.clientY;
};

box.addEventListener("mousedown",(e)=>{
    X = e.clientX;
    Y = e.clientY;
    box.addEventListener("mousemove",mouseMoveHandler)
})





box.addEventListener("mouseup",()=>{
   box.removeEventListener("mousemove",mouseMoveHandler);
})

box.addEventListener("mouseleave",()=>{
    box.removeEventListener("mousemove",mouseMoveHandler);
})