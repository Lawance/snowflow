
function getElement(selector){
    return document.querySelector(selector);
}

function getAllElements(selector){
    return document.querySelectorAll(selector);
}

function getClass(element){
    return element.getAttribute("class");
}

function setClass(element,clas){
    return element.setAttribute("class",clas);
}

function addClass(element,clas){
    var basclas=getClass(element);
    if(basclas.indexOf(clas)===-1){
        setClass(element,basclas+" "+clas);
    }
}

function delClass(element,clas){
    var basclas=getClass(element);
    if(basclas.indexOf(clas)!=-1){
        setClass(element,basclas.split(clas).join(" ").replace(/\s+/," "));
    }
}

var items=getAllElements('.head1_nav1_a1');
var item=getElement('.head1_nav1_a1_active');
var rail=getElement('.head1_nav1_rail');
var outlineitem=getAllElements('.outline_items');

//将要进行动画初始化的的类包装成一个对象
var screenElements={
    '.section1':['.section1_atc_h','.section1_atc_p'],
    '.section2':['.section2_h','.section2_p','.img2','.img1'],
    '.section3':['.img3','.section3_h','.section3_p','.section3_u','.section3_u_l','.section3_u_l_1','.section3_u_l_2',
                    '.section3_u_l_3','.section3_u_l_4','.section3_u_l_5'],
    '.section4':['.section4_h','.section4_u','.section4_u_l1','.section4_u_l2','.section4_u_l3','.section4_u_l4','.section4_p'],
    '.section5':['.section5_i','.section5_h','.section5_hr','.section5_p']
};
//动画初始化隐藏函数
function screenanimat(secindex){
    var elementscls=screenElements[secindex];
    for(var j=0;j<elementscls.length;j++){
        var ele=document.querySelector(elementscls[j]);
        var basic=ele.getAttribute("class");
        ele.setAttribute('class',basic+' '+elementscls[j].substr(1)+'_init');
    }
}
//对每个屏幕进行动画初始化隐藏
var z;
window.onload=function(){
    for(z in screenElements){
        if(z==='.section1'){
            continue;
        }
    screenanimat(z);
}
};
//执行动画的函数
function playanimal(secindex){
    var elementscreen=screenElements[secindex];
    for(var t=0;t<elementscreen.length;t++){
        var ele=document.querySelector(elementscreen[t]);
        var base=ele.getAttribute('class');
        ele.setAttribute('class',base.replace('_init','_done'));
    }
}

//点击哪个标题 哪个标题变成红色 被标记为'head1_nav1_a1_active'
var activeitem=function(index,itemlist){
    itemlist[index].onclick=function(){
        for(var k=0;k<items.length;k++) {
            delClass(items[k], 'head1_nav1_a1_active');
        }
        addClass(itemlist[index],'head1_nav1_a1_active');
    }
};
for(var j=0;j<items.length;j++){
    activeitem(j, items);
}


//页面滚动到那个位置，header和竖直大纲的对应标题变红
function swith(index){
    for(var n=0;n<items.length;n++){
        delClass(items[n],'head1_nav1_a1_active');
    }
    for(var j=0;j<outlineitem.length;j++){
        delClass(outlineitem[j],'bar_a1_active');
    }
    addClass(items[index],'head1_nav1_a1_active');
    rail.style.marginLeft=90*index+"px";
    addClass(outlineitem[index],'bar_a1_active');
}

window.onscroll=function(){
    var scroltp=document.documentElement.scrollTop||document.body.scrollTop;
    if(scroltp>60){
        addClass(getElement('.head1'), 'head1_active');
        addClass(getElement('.bar'),"bar_active")
    }
    else{
        delClass(getElement('.head1'), 'head1_active');
        delClass(getElement('.bar'),'bar_active');
    }
    if(scroltp>1){
        playanimal('.section1');
        swith(0);
    }
    if(scroltp>460*1+100){
        playanimal('.section2');
        swith(1);
    }
    if(scroltp>460*2+100){
        playanimal('.section3');
        swith(2);
    }
    if(scroltp>460*3+300){
        playanimal('.section4');
        swith(3);
    }
    if(scroltp>460*4+500){
        playanimal('.section5');
        swith(4);
    }

};


//滑动门效果，鼠标在某个标题下方红色div滚到某个标题下方，鼠标移出次标题后红色div 滑动到红色标题处

function navrailctl(itemss,index){
    itemss[index].onmouseover=function(){
        rail.style.marginLeft=90*index+"px";
    };
    itemss[index].onmouseout=function(){
        var activeindex=0;
        for(var m=0;m<itemss.length;m++){
            if(getClass(itemss[m]).indexOf('head1_nav1_a1_active')>-1){
                activeindex=m;
                break;
            }
        }
        rail.style.marginLeft=90*activeindex+"px";
    }
}
for(var j=0;j<items.length;j++){
    navrailctl(items,j);
}


setTimeout(function(){
playanimal('.section1');
},200);


