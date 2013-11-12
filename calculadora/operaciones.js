function suma(){
if (document.getElementById("n1").value == '' || document.getElementById("n2").value == ''){
alert("Error: Ingrese un numero");
return false;
}
if ((isNaN(document.getElementById("n1").value)) || (isNaN(document.getElementById("n2").value))) {
alert("Error: Ingrese solo numeros");
return false;
}
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var suma = n1+n2;
document.getElementById("resultado").value=suma;
} 

function resta(){
if (document.getElementById("n1").value == '' || document.getElementById("n2").value == ''){
alert("Error: Ingrese un numero");
return false;
}
if ((isNaN(document.getElementById("n1").value)) || (isNaN(document.getElementById("n2").value))) {
alert("Error: Ingrese solo numeros");
return false;
}
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var resta = n1-n2;
document.getElementById("resultado").value=resta;
} 

function division(){
if (document.getElementById("n1").value == '' || document.getElementById("n2").value == ''){
alert("Error: Ingrese un numero");
return false;
}
if ((isNaN(document.getElementById("n1").value)) || (isNaN(document.getElementById("n2").value))) {
alert("Error: Ingrese solo numeros");
return false;
}
if (document.getElementById("n1").value == 0 || document.getElementById("n2").value == 0) {
alert("Error: No se puede dividir entre 0");
return false;
}
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var division = n1/n2;
document.getElementById("resultado").value=division;
}

function multiplicacion(){
if (document.getElementById("n1").value == '' || document.getElementById("n2").value == ''){
alert("Error: Ingrese un numero");
return false;
}
if ((isNaN(document.getElementById("n1").value)) || (isNaN(document.getElementById("n2").value))) {
alert("Error: Ingrese solo numeros");
return false;
}
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var multiplicacion = n1*n2;
document.getElementById("resultado").value=multiplicacion;
} 

function carga(){
document.getElementById("btn1").onclick=suma;
document.getElementById("btn2").onclick=resta;
document.getElementById("btn3").onclick=division;
document.getElementById("btn4").onclick=multiplicacion;
}
window.onload=carga;
