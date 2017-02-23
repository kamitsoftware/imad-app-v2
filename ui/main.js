console.log('Loaded!');

// change the text of the main text div
/*var element= document.getElementById('main-text');

element.innerHTML='new value';*/

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
 
 //var counter=0;
 var button= document.getElementById('counter');
 button.onclick=function(){
     //make a requst to the counter endpoint
     var request= new XMLHttpRequest();
     
     //capture the response and store in variable
     request.onreadystatechange = function()
     {
         if ( request.readyState === XMLHttpRequest.DONE){
         
         //take some action
         if(request.status===200)
         {
           var counter=  request.responseText;
               //counter=counter+1;
     var span=document.getElementById('count');
     span.innerHTML=counter.toString();
         }
         }
     };
   request.open('GET','http://kamitsoftware.imad.hasura-app.io/counter',true);
   request.send(null);
 };
 
 