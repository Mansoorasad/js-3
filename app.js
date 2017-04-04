document.write("<h1>TABLE</h1>");
var a= +prompt("Enter a Number for table: ");
var l= +prompt("Enter a length of table: ");
for(var i=1; i<=l; i++){
    document.write(a + " x "+ i+" = "+a*i + "<br>" );
} 

document.write("<h1>Right Angle Triangle</h1>");
var p;
for(var j=1; j<=7; ++j){
    document.write("<br/>");
    for(var k=1; k<=j; ++k){
    document.write("*");
}
}


document.write("<h1>Diamond</h1>");


   var a= 6;
  
 

 
   for (var k = 1; k <= a; k++){
     for (var c = k; c < a; c++){
      document.write("&nbsp&nbsp");
     } 

 
 for ( var d = 1; d <= (2*k-1); d++){
       document.write("*");
 } 
   document.write("</br>");
   }
 

   for ( k = a; k >= 1 ; k--)
   {
     for (c = k; c < a; c++){
      document.write("&nbsp&nbsp");
     } 

 
      for (d = 1 ; d <= (2*k-1); d++){
       document.write("*");
      }
     document.write("</br>");
   }




// function printDiamond() {
//                 document.getElementById("result").innerHTML = "";
//                 var limit = document.getElementById("limit").value;

//                 if (limit < 2 || limit > 100) {
//                     alert('Please enter value between 1 and 101');
//                     return;
//                 }

//                 var space = limit;
//                 for (i = 1; i <= limit; i++) {
//                     for (j = 1; j <= space; j++) {
//                         document.getElementById("result").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
//                     }
//                     space--;
//                     for (j = 1; j <= 2 * i - 1; j++) {
//                         document.getElementById("result").insertAdjacentHTML('beforeend', '*');
//                     }
//                     document.getElementById("result").insertAdjacentHTML('beforeend', '<br>');
//                 }

//                 space = 2;
//                 for (i = 1; i <= limit; i++) {
//                     for (j = 1; j <= space; j++) {
//                         document.getElementById("result").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
//                     }
//                     space++;
//                     for (j = 1; j <= 2 * (limit - i) - 1; j++) {
//                         document.getElementById("result").insertAdjacentHTML('beforeend', '*');
//                     }
//                     document.getElementById("result").insertAdjacentHTML('beforeend', '<br>');
//                 }
//                 alert('Done!');
//             }
 
