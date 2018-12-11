var _body=document.getElementsByTagName("body")
var jianjie=document.getElementsByClassName("jianjie");
var cg=document.getElementById("change");
var txt=document.getElementById("txt");
var photos=document.getElementsByClassName("hdn");
var lclick=document.getElementById("lclick");
var rclick=document.getElementById("rclick");

var timer;
var num=0;
var istra=true;

jianjie[0].onmousemove=function(){
	cg.style.opacity=0.3;
	txt.style.opacity=1;

}
jianjie[0].onmouseout=function(){
	cg.style.opacity=1;
	txt.style.opacity=0;
}

_body[0].onload=function(){
	timer=setInterval("ani()",1000);
	photos[0].style.left=-800*(Math.floor(num/3))+"px";
	num++;
}

function ani(){
	num++;
	//console.log(num);
	if(num%3==0){
		photos[0].style.transition="all 1s";
		photos[0].style.left=-800*(Math.floor(num/3))+"px";
	}
	else if(num>=17){
		num=2;
		photos[0].style.transition=undefined;
		photos[0].style.left=-800*(Math.floor(num/3))+"px";
	}
}

rclick.onclick=function(){
	if(num>=0&&num<=13){
		num+=3;
		photos[0].style.left=-800*(Math.floor(num/3))+"px";
		num--;
	}
	else {
		num=3;
		photos[0].style.left=-800*(Math.floor(num/3))+"px";
		num--;
	}

}
lclick.onclick=function(){
	if(num>=3&&num<=18){
		num-=3;
		photos[0].style.left=-800*(Math.floor(num/3))+"px";
		num--;
	}
	else{
		num=13;
		photos[0].style.left=-800*(Math.floor(num/3))+"px";
		num--;
	}
}

document.onvisibilitychange=function(){   
	if(document.visibilityState=="visible"){ 
		      timer=setInterval("ani()", 1000);   
	}
	else{       
		clearInterval(timer);   
	}
}




