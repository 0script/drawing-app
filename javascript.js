const canvas=document.getElementById('canvas');
const Xbtn=document.getElementById('clear');
const setSize=document.getElementById('size');
const plusbtn=document.getElementById('increase');
const minbtn=document.getElementById('decrease');
const myInput=document.getElementById('color');

const ctx=canvas.getContext('2d');

let size=20;
let isPress=false;
let color='black';
let x;
let y;

canvas.addEventListener('mousedown',(e)=>{
    isPress=true;
    x=e.offsetX;
    y=e.offsetY;

});


canvas.addEventListener('mouseup',(e)=>{
    isPress=false;
    x=undefined;
    y=undefined;

});

canvas.addEventListener('mousemove',(e)=>{
    if(isPress){
        const x2=e.offsetX;
        const y2=e.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x=x2;
        y=y2;
    }
});

Xbtn.addEventListener('click',()=> {
    ctx.clearRect(0,0,canvas.width,canvas.height);
});

plusbtn.addEventListener('click',()=>{
    size++;
    setSize.innerHTML=size;
});

minbtn.addEventListener('click',()=>{

    size<=0?0:size--;
    setSize.innerHTML=size;
});

function changeColor(){
    color=document.getElementById('color').value;
}

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2,true);
    ctx.fillStyle=color;
    ctx.fill();
}

function drawLine(ogX,ogY,endX,endY){
    ctx.beginPath();
    ctx.moveTo(ogX,ogY);
    ctx.lineTo(endX,endY);
    ctx.strokeStyle=color;
    ctx.lineWidth=size*2;
    ctx.stroke();
}