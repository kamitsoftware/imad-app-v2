console.log('Loaded!');

// change the text of the main text div
var element= document.getElementById('main-text');

element.innerHTML='new value';

// move the image 
 
/* var img = document.getElementById('madi');
 var marginLeft=0;
 function moveRight()
 {
     marginLeft=marginLeft+10;
     img.style.marginLeft=marginLeft+'px' ;
     
 }
 img.onclick = function() {
   var interval= setInterval(moveRight,100);  
 };*/
 
 var counter=0;
 var button= document.getElementById('counter');
 button.onclick=function(){
     counter=counter+1;
     var span=document.getElementById('count');
     span.innerHTML=counter.toString();
 };
 
 