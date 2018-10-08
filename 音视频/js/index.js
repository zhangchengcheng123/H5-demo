var a=document.getElementsByTagName("a");
var play=document.getElementById("play");
for(var i=0;i<a.length;i++){
	a[i].onclick=function music(){
		var prev=this.previousElementSibling;
		play.src=prev.src;
		play.play();
	}
}