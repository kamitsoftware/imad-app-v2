console.log('Loaded!');

// change the text of the main text div
var element= document.getElementById('main-text');

element.innerHTML='new value';

// move the image 
 
 var img = document.getElementById('Screenshot_1');
 img.onclick=function(){
   img.style.marginLeft='1000px';  
 };