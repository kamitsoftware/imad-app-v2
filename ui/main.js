console.log('Loaded!');

// change the text of the main text div
var element= document.getElementById('main-text');

element.innerHTML='new value';

// move the image 
 
 var img = document.getElementById('madi');
 var marginleft=0;
 function moveright()
 {
     marginLeft=marginLeft+10;
     img.style.marginLeft=marginLeft+'px' ;
     
 }
 img.onclick=function(){
   var interval= setInterval(moveRight,100);  
 };