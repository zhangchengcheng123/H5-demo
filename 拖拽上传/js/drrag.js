  window.onload=function(){ 
   var dropBox= document.getElementById("dropBox"); 
   // 鼠标进入放置区时 
   dropBox.ondragenter = ignoreFile; 
   // 拖动文件的鼠标指针位置放置区之上时发生 
   dropBox.ondragover = ignoreFile; 
   dropBox.ondrop = drop; 
  } 
  function ignoreFile(e){ 
   // 确保其他元素不会取得该事件 
   e.stopPropagation(); 
   e.preventDefault(); 
  } 
  function drop(e){ 
   e.stopPropagation(); 
   e.preventDefault(); 
  
   // 取得拖放进来的文件 
   var data = e.dataTransfer; 
   var files = data.files; 
   // 将其传给真正的处理文件的函数 
     
   var file = files[0]; 
   var reader = new FileReader(); 
   reader.onload=function(e){ 
    dropBox.style.backgroundImage = "url('"+e.target.result+"')"; 
   } 
   reader.readAsDataURL(file); 
  } 