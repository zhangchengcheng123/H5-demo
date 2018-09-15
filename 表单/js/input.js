var li;
var len;
function $$(id){
	return document.getElementById(id);
}
window.onload=function(){
	var txt=document.getElementById("regemail");
	var list=document.getElementById("list");
	li=list.getElementsByTagName("li");
    len=li.length;
// 给每个li绑定一个鼠标的点击事件
    for(var i=1;i<len;i++){
        li[i].onmousedown=function(){
            txt.value=this.textContent;
            list.style.display="none";
        }
    }
    txt.onfocus=function(){
        list.style.display="block";
    }
    txt.onblur=function(){
        list.style.display="none";
    }
    txt.onkeyup=function(){
        //获取文本框中的值
        var txt=this.value;
        var con="";
        if(txt.indexOf("@")>0){
            con=txt.substring(txt.indexOf("@")-1);//获取的输入的@开始的内容
            txt=txt.substring(0,txt.indexOf("@"));
        }else{
            con="";
        }
         var val="";
        //将这个值放到所有的li前面
        for(var i=1; i<len; i++){
            val=li[i].textContent;
            val=val.substring(val.indexOf("@"));
            li[i].textContent=txt+val;
        }
		//用正则表达式验证邮箱
        if(con!=""){
            var reg=new RegExp(con,"i");
            for(var i=1;i<len;i++){
                if(reg.test(li[i].textContent)){
                    li[i].style.display="block";
                }else{
                    li[i].style.display="none";
                    } 
            }
        }
    }
}