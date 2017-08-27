//浅灰色遮挡
var b=document.createElement("div");
var btnContain=document.getElementById("btnContain");
var btnList=btnContain.getElementsByClassName("btn1");
var bdy=document.getElementsByClassName("bdy");
var pop1=document.getElementById("pop1");

var popBg=function(){
    //b.setAttribute("id","b1");
    b.style.backgroundColor="#F0F0F0";
    b.style.opacity="0.5";
    b.style.width=100+"%";
    b.style.height="100%";
    b.style.position="absolute";
    b.style.zIndex=10;
    b.style.top=0;
    b.style.left=0;
    document.body.appendChild(b);


    pop1.style.display="block";         //控制询问框在加载成功时出现
    //b.style.cssText="width:1000; height:1000; background-color: rgba(24,240,240,1)";
    //alert(b.style.backgroundColor);
    //document.documentElement.style.overflow = "hidden";
    //document.documentElement.scrollHeight=0;


    window.onmousewheel=document.onmousewheel=function(){   //通过滚动事件禁止滚动
        if(!event){
            event =window.event;
        }
        event.preventDefault();
    };
    //document.documentElement.style.overflow = "";
};

//弹出层关闭函数
var btnContain=document.getElementById("btnContain");
var btnList=btnContain.getElementsByClassName("btn1");
for(var j=0;j<btnList.length;j++){
    btnList[j].onclick=function(){
       pop1.style.display="none";
       document.body.removeChild(b);
       window.onmousewheel=document.onmousewheel=null;
       }
    }

window.onload=popBg();


//设置可拖动div
pop1.onmousedown=function() {
    if (!event) {
        event = window.event
    }
     divXDist = event.clientX - pop1.offsetLeft;
     divYDist = event.clientY - pop1.offsetTop;

    pop1.onmousemove = function(){
        if (!event) {
            var event = window.event
        }
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        pop1.style.left = mouseX - divXDist + "px";
        pop1.style.top = mouseY - divYDist + "px";
    };
    pop1.onmouseup=function(){
        pop1.onmousemove=null;
        pop1.onmouseup=null;
    }

} ;


