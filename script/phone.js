var imgs=document.getElementsByClassName("imgshow");
var pshow=document.getElementsByClassName("pshow");
var namep=document.getElementsByClassName("namep")[0];
var iname=new Array("白云仙馆","笨猪跳","鸿鹄楼","麓湖公园","聚芳园",
					"五羊雕像","镇海楼","中山纪念碑","广州美术馆","海员亭",
					"广州塔","海心沙","珠江夜游","白鹅潭","大沙头码头");

switch(document.title){
	case "view01":
		//console.log(1);
		innerBys();
		break;
	case "view02":
		//console.log(2);
		innerYxgy();
		break;
	case "view03":
		//console.log(3);
		innerYzj();
		break;
}

function innerBys(){
		for(let i=0;i<5;i++){
		imgs[i].onclick=function(){
			pshow[0].innerHTML="<div><img src=\"image\/bys\/b_view0"
							 	+(i+1)+".jpg\" alt=\""+iname[i]+
							 	"\" width=\"400px\" height=\"250px\"><\/div>";
			namep.innerHTML=iname[i];
		}
		
	}
}
function innerYxgy(){
		for(let i=0;i<5;i++){
		imgs[i].onclick=function(){
			pshow[0].innerHTML="<div><img src=\"image\/yxgy\/y_view0"
							 	+(i+1)+".jpg\" alt=\""+iname[i+5]+
							 	"\" width=\"400px\" height=\"250px\"><\/div>";
			namep.innerHTML=iname[i+5];
		}
	}
}
function innerYzj(){
		for(let i=0;i<5;i++){
		imgs[i].onclick=function(){
			pshow[0].innerHTML="<div><img src=\"image\/yzj\/z_view0"
							 	+(i+1)+".jpg\" alt=\""+iname[i+10]+
							 	"\" width=\"400px\" height=\"250px\"><\/div>";
			namep.innerHTML=iname[i+10];
		}
	}
}



