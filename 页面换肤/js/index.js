window.onload=function(){
	if(!window.localStorage){
		alert("你的浏览器不支持LocalStorage，请你更新浏览器");	
	}
	var on=document.getElementsByClassName('on')
	var txt=document.getElementById('txt');
	if("key"!=null){
		txt.id=localStorage.getItem("key");
	}
	for(var i=0;i<on.length;i++){
		on[i].onclick=function(){
			if("key"!=null){
				var t=document.getElementById(localStorage.getItem("key"));
				t.className="down";
			}
			txt.id=this.id;
			localStorage.setItem("key",txt.id);
			this.className="up";
		}
	}
}


