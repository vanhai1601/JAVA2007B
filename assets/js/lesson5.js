var kichthuoc = document.getElementsByClassName("left")[0].clientWidth;
var obj = document.getElementsByClassName("chuyen-slide")[0];
var chuyen = 0;
var max = 900;
function next(){
    if(chuyen<max)chuyen += kichthuoc;
    else chuyen =0;
    obj.style.marginLeft = '-' + chuyen +'px';
}
function back(){
    if(chuyen == 0) chuyen =900;
    else chuyen -=kichthuoc;
    obj.style.marginLeft ='-' + chuyen +'px';
}
setInterval(function(){
    next();
},5000);





var kichthuoc1 =document.getElementsByClassName("spham")[0].clientWidth;
    kichthuoc1 +=1;
var obj1 = document.getElementsByClassName("listsp")[0];
var dieuhuong = 0;
var max1 = 5*kichthuoc1;
function next1(){
     if(dieuhuong < max1 ) dieuhuong +=kichthuoc1;
     else dieuhuong = 0;
     obj1.style.marginLeft = '-'+dieuhuong+'px';
}
function back1(){
    if(dieuhuong == 0) dieuhuong =max1;
    else dieuhuong -=kichthuoc1;
    obj1.style.marginLeft ='-' + dieuhuong +'px';
}
setInterval(function(){
    next1();
},3000);