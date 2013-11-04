function formulario() { 
 if (n1.value   == n1) 
   { 
     alert ('El numero 1 esta vacío');  
     n1.focus(); return false; 
   } 
   if (n2.value  == n2) 
   { 
     alert ('El numero 2 esta vacío'); 
     n2.focus(); return false; 
   } 
  return true; 
}

function suma()
{
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var suma = n1+n2;
document.getElementById("result").value=suma;
}  
function resta()
{
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var resta = n1-n2;
document.getElementById("result").value=resta;
}
function multiplicacion()
{
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var multiplicacion = n1*n2;
document.getElementById("result").value=multiplicacion;
}
function division()
{
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
  if(n1 | n2 !=1){
     var division = n1/n2;
  }else{
     var division ="0";

  }
document.getElementById("result").value=division;
}       
function carga()
{
document.getElementById("btn1").onclick=suma;
document.getElementById("btn2").onclick=resta;
document.getElementById("btn3").onclick=multiplicacion;
document.getElementById("btn4").onclick=division;
}
window.onload=carga;