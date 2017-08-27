//屏幕生成雪花效果

var xPo=[];
var yPo=[];

function drawSf(x,y,a){
    var py={
        x:x,
        y:y,
        a:a
    };
    var canvas=document.getElementById("canvas");
    var sf1=canvas.getContext("2d");
    sf1.clearRect(x-a/8,y-7*a/8,5*a/4,6*a/4);
    sf1.beginPath();
    sf1.strokeStyle="white";
    sf1.moveTo(py.x, py.y);
    sf1.lineTo(py.x+py.a, py.y);
    sf1.moveTo(py.x+py.a/2,py.y-py.a/2);
    sf1.lineTo(py.x+py.a/2,py.y+py.a/2);
    sf1.moveTo(py.x+py.a/8,py.y-3*py.a/8);
    sf1.lineTo(py.x+7*py.a/8,py.y+3*py.a/8);
    sf1.moveTo(py.x+py.a/8,py.y+3*py.a/8);
    sf1.lineTo(py.x+7*py.a/8,py.y-3*py.a/8);

    sf1.moveTo(py.x+py.a/8, py.y-py.a/8);
    sf1.lineTo(py.x+2*py.a/8,py.y);
    sf1.moveTo(py.x+py.a/8, py.y+py.a/8);
    sf1.lineTo(py.x+2*py.a/8,py.y);

    sf1.moveTo(py.x+3*py.a/8, py.y-py.a/2);
    sf1.lineTo(py.x+py.a/2,py.y-3*py.a/8);
    sf1.moveTo(py.x+5*py.a/8, py.y-py.a/2);
    sf1.lineTo(py.x+py.a/2,py.y-3*py.a/8);

    sf1.moveTo(py.x+7*py.a/8, py.y-py.a/8);
    sf1.lineTo(py.x+6*py.a/8,py.y);
    sf1.moveTo(py.x+7*py.a/8, py.y+py.a/8);
    sf1.lineTo(py.x+6*py.a/8,py.y);

    sf1.moveTo(py.x+3*py.a/8, py.y+py.a/2);
    sf1.lineTo(py.x+py.a/2,py.y+3*py.a/8);
    sf1.moveTo(py.x+5*py.a/8, py.y+py.a/2);
    sf1.lineTo(py.x+py.a/2,py.y+3*py.a/8);
    sf1.closePath();
    sf1.stroke();

   // xPo[xPo.length]=py.x;
    //yPo[xPo.length]=py.y;
    //console.log("水平方向"+py.x +"竖直方向"+py.y );
}



function  drop(k){
var i=0;
var s=Math.random();
var step=Math.floor(s);
var timer=setInterval(function dra(){
    ++i;
    if(i<1050){
        var list=new Array();
        list=[1,2,3,4,5,6,7,8,9,10];
        var yPos=i*list[step];
        drawSf(k,(yPos),50*(s+0.1));
        //yPo[xPo.length]=yPos;
    }else{
        i=0;
        clearInterval(timer);
    }
},30);}


var k=0;
setInterval(function(){
    var h=Math.random();
     drop(h*900);
},5000);

//drop(50);
